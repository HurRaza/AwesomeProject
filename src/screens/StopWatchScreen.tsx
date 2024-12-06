import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const StopWatchScreen = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [isStart, setStart] = useState<boolean>(false);
  const [isPause, setPause] = useState<boolean>(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  function handleStartStop() {
    if (!timer) {
      setTimer(setInterval(() => setSeconds(prev => prev + 1), 1000));
      setStart(true);
      setPause(false);
    } else {
      clearInterval(timer);
      setTimer(null);
      setSeconds(0);
      setMinutes(0);
      setStart(false);
    }
  }

  const handlePauseResume = () => {
    if (!timer) {
      setTimer(setInterval(() => setSeconds(prev => prev + 1), 1000));
      setPause(false);
    } else {
      clearInterval(timer);
      setTimer(null);
      setPause(true);
    }
  };

  useEffect(() => {
    if (seconds > 59) {
      setSeconds(0);
      setMinutes(prev => prev + 1);
    }
  }, [seconds]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>STOPWATCH</Text>
      <Text style={styles.timer}>
        {minutes > 9 ? minutes : '0' + minutes} :{' '}
        {seconds > 9 ? seconds : '0' + seconds}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={handleStartStop}>
          <Icon name={isStart ? 'refresh' : 'play'} size={50} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={handlePauseResume}>
          <Icon name={isPause ? 'play' : 'pause'} size={50} color="#F44336" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StopWatchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  timer: {
    fontSize: 50,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginTop: 30,
  },
  buttonWrapper: {
    marginBottom: 20,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#222',
  },
});
