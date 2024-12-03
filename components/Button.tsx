import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, func}: {title: string; func: () => void}) => {
  return (
    <TouchableOpacity onPress={func} style={styles.btn}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: '#3e1c3c',
    padding: 12,
    borderRadius: 50,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
