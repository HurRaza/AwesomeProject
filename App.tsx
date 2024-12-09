import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/types';
import NotesScreen from './src/screens/NotesScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/Signup';
import EditNoteScreen from './src/screens/EditNoteScreen';
import CounterScreen from './src/screens/CounterScreen';
import {Provider, useSelector} from 'react-redux';
import {store, persistor, RootState} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import StopWatchScreen from './src/screens/StopWatchScreen';
import CalulatorScreen from './src/screens/CalculatorScreen';
import TodoScreen from './src/screens/TodoScreen';
import HomeScreen from './src/screens/HomeScreen';
import PostScreen from './src/screens/PostScreen';
import AddPostScreen from './src/screens/AddPost';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const {userData} = useSelector((state: RootState) => state.auth);
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      {userData ? (
        <>
          <Stack.Screen
            name="Posts"
            component={PostScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddPost"
            component={AddPostScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Todo"
            component={TodoScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Counter"
            component={CounterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Calculator"
            component={CalulatorScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Stopwatch"
            component={StopWatchScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Notes"
            component={NotesScreen}
            options={() => {
              return {
                headerTitle: 'All Notes',
              };
            }}
          />
          <Stack.Screen name="EditNote" component={EditNoteScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack />
          <Toast />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
