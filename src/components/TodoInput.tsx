import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type InputProps = {
  task: string;
  setTask: (task: string) => void;
  addTask: () => void;
  isEdit: boolean;
};

const TodoInput: React.FC<InputProps> = ({task, setTask, addTask, isEdit}) => {
  return (
    <View style={styles.inputCont}>
      <TextInput
        style={styles.input}
        value={task}
        placeholder="new todo...."
        placeholderTextColor="#B2A59D"
        onChangeText={task => setTask(task)}
      />
      <TouchableOpacity style={styles.btn} onPress={addTask}>
        <Text style={styles.btnText}>{isEdit ? 'Save' : 'Add'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputCont: {
    width: '80%',
    marginVertical: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#493628',
    padding: 12,
    backgroundColor: '#F1E5D5',
    fontSize: 18,
    color: '#493628',
  },
  btn: {
    backgroundColor: '#493628',
    justifyContent: 'center',
    marginLeft: 12,
    borderRadius: 10,
    width: 60,
    height: 50,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#E4E0E1',
  },
});

export default TodoInput;
