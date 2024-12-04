import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/types';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/Login';
import SignupScreen from './src/screens/Signup';
import EditNoteScreen from './src/screens/EditNoteScreen';
import CounterScreen from './src/screens/CounterScreen';
import {Provider, useSelector} from 'react-redux';
import {store, persistor, RootState} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const {userData} = useSelector((state: RootState) => state.auth);
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      {userData ? (
        <>
          <Stack.Screen
            name="Counter"
            component={CounterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
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
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
