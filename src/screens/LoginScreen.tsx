import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../types';
import Button from '../components/Button';
import CustomInput from '../components/CustomInput';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/slices/AuthSlice';
import {AppDispatch, RootState} from '../redux/store';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const navigation = useNavigation<ScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const {isLoading} = useSelector((state: RootState) => state.auth);

  const handleLogin = () => {
    const params = {
      username: email,
      password: password,
    };
    dispatch(login(params));
    setEmail('');
    setPassword('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.heroContainer}>
            <Text style={styles.heroText}>Hello</Text>
            <Text style={styles.heroText}>Sign in!</Text>
          </View>
          <View style={styles.overlay}>
            <View style={styles.inputContainer}>
              <CustomInput
                value={email}
                onChangeText={setEmail}
                label="Email"
                placeholder="john123@gmail.com"
                icon={require('../../assets/user.png')}
              />
              <CustomInput
                value={password}
                onChangeText={setPassword}
                label="Password"
                placeholder="*********"
                secureTextEntry={!isPasswordVisible}
                customIcon={
                  isPasswordVisible
                    ? require('../../assets/eyeclose.png')
                    : require('../../assets/eye.png')
                }
                onIconPress={() => setIsPasswordVisible(!isPasswordVisible)}
              />
              <Text style={styles.forgot}>Forgot Password?</Text>
              <Button title="SIGN IN" func={handleLogin} />
              <View style={styles.signCont}>
                <Text style={styles.ques}>Don't have an account?</Text>
                <Text
                  style={styles.sign}
                  onPress={() => navigation.navigate('Signup')}>
                  Sign up
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e1c3c',
  },
  heroContainer: {
    flex: 1,
    padding: 40,
  },
  heroText: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  overlay: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  inputContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  forgot: {
    marginTop: 20,
    alignSelf: 'flex-end',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 50,
  },
  signCont: {
    marginTop: 80,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  ques: {
    color: '#c2c2c2',
    fontSize: 16,
  },
  sign: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
});

export default LoginScreen;
