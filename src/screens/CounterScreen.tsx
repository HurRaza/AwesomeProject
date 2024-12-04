import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, incrementByAmount} from '../redux/slices/CounterSlice';
import type {RootState} from '../redux/store';

const CounterScreen = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>COUNTER</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.btnCont}>
        <Button title="Increment" func={() => dispatch(increment())} />
      </View>
      <View style={styles.btnCont}>
        <Button title="Decrement" func={() => dispatch(decrement())} />
      </View>
      <View style={styles.btnCont}>
        <Button title="Increment by 5" func={() => dispatch(incrementByAmount(5))} />
      </View>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#f0e6f6',
  },
  heading:{
    fontSize:40,
    fontWeight:"bold",
    color: '#5c2a75',
  },
  count:{
    fontSize:50,
    paddingVertical:30,
    color: '#5c2a75',
  },
  btnCont: {
    margin: 10,
  },
});
