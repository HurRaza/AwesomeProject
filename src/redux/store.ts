import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/CounterSlice'
import AuthSlice from './slices/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist';

const reducers = combineReducers({
    counter: counterReducer,
    auth: AuthSlice
})

const persistConfig = {
    key:'root',
    storage: AsyncStorage,
    whiteList : ['auth','counter']
}

const persistedReducer = persistReducer(persistConfig,reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck:false})
})

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export {store,persistor}