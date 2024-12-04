import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import {RootStackParamList} from './src/types';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/Login';
import SignupScreen from './src/screens/Signup';
import EditNoteScreen from './src/screens/EditNoteScreen';
import CounterScreen from './src/screens/CounterScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Counter"
      screenOptions={{headerTitleAlign: 'center'}}>
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
      <Stack.Screen name="Counter" component={CounterScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}
