import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {useState} from 'react';

const CalulatorScreen = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const button: string[][] = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const operator: string[] = ['÷', '×', '-', '+', '='];

  const handlePress = (val: string): void => {
    if (val === 'AC') {
      setInput('');
      setResult('');
    } else if (val === '=' && result) {
      if (operator.includes(result.slice(-1))) {
        const calculate = eval(
          result.slice(0, -1).replace('÷', '/').replace('×', '*'),
        );
        setInput(result.slice(0, -1));
        setResult(calculate.toString());
      } else {
        try {
          const calculate = eval(result.replace('÷', '/').replace('×', '*'));
          setInput(result);
          setResult(calculate.toString());
        } catch (err) {
          setResult('Err');
        }
      }
    } else if (operator.includes(val) || val === '.') {
      if (result.length === 0) {
        return;
      } else if (operator.includes(result.slice(-1)) || val === '.') {
        setResult(result.slice(0, -1) + val);
      } else {
        setResult(prev => prev + val);
      }
    } else if (val === '%') {
      if (result) {
        const res =
          parseFloat(eval(result.replace('÷', '/').replace('×', '*'))) / 100;
        setResult(res.toString());
      }
    } else if (val === '+/-') {
      if (result) {
        if (result.startsWith('-')) {
          setResult(result.slice(1));
        } else {
          setResult('-' + result);
        }
      }
    } else {
      setResult(prev => prev + val);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputCont}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.result}>{result || 0}</Text>
      </View>
      <View style={styles.buttons}>
        {button.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(button)}
                style={[
                  styles.btn,
                  button === '0' ? styles.zeroBtn : '',
                  button === '=' ? styles.equalBtn : '',
                  ['÷', '×', '-', '+', '='].includes(button)
                    ? styles.operandBtn
                    : '',
                  ['AC', '+/-', '%'].includes(button) ? styles.greyBtn : '',
                ]}>
                <Text
                  style={[
                    styles.btnText,
                    ['÷', '×', '-', '+', '='].includes(button)
                      ? styles.operandText
                      : '',
                  ]}>
                  {button}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  inputCont: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  inputText: {
    fontSize: 40,
    color: '#5C5C5F',
  },
  result: {
    fontSize: 70,
    fontWeight: '600',
    color: '#fff',
    marginTop: 10,
  },
  buttons: {
    flex: 2,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#2A2A2C',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  operandBtn: {
    backgroundColor: '#FF9F0A',
  },
  greyBtn: {
    backgroundColor: '#5C5C5F',
  },
  zeroBtn: {
    flex: 2,
    alignItems: 'flex-start',
    paddingLeft: 40,
    marginRight: 10,
  },
  equalBtn: {
    marginLeft: 10,
  },
  btnText: {
    fontSize: 35,
    color: '#fff',
  },
  operandText: {
    fontSize: 35,
  },
});

export default CalulatorScreen;
