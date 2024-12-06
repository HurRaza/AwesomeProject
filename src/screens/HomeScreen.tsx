import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../types';
import Button from '../components/Button';
import {logout} from '../redux/slices/AuthSlice';
import {useDispatch} from 'react-redux';

const HomeScreen = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.btnCont}>
        <Button
          title="Calculator"
          func={() => navigation.navigate('Calculator')}
        />
      </View>
      <View style={styles.btnCont}>
        <Button title="Counter" func={() => navigation.navigate('Counter')} />
      </View>
      <View style={styles.btnCont}>
        <Button title="Notes" func={() => navigation.navigate('Notes')} />
      </View>
      <View style={styles.btnCont}>
        <Button
          title="StopWatch"
          func={() => navigation.navigate('Stopwatch')}
        />
      </View>
      <View style={styles.btnCont}>
        <Button title="Todo" func={() => navigation.navigate('Todo')} />
      </View>
      <View style={styles.btnCont}>
        <Button title="Logout" func={() => dispatch(logout())} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#f0e6f6',
  },
  btnCont: {
    marginVertical: 20,
  },
});
