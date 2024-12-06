import {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TodoInput from '../components/TodoInput';
import CustomFlatList from '../components/CustomFlatlist';

type Task = {
  id: string;
  name: string;
  Completed: boolean;
};

const tasks: Task[] = [
  {id: '1', name: 'buy coffee', Completed: false},
  {id: '2', name: 'learn javascript', Completed: false},
];

const TodoScreen = () => {
  const [task, setTask] = useState<string>('');
  const [list, setList] = useState<Task[]>(tasks);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);

  const addTask = () => {
    if (task.trim() !== '') {
      if (isEdit) {
        const newList = [...list];
        if (editId !== null) {
          newList[editId].name = task;
        }
        setList(newList);
        setIsEdit(false);
        setEditId(null);
      } else {
        setList(prev => [
          ...prev,
          {id: Date.now().toString(), name: task, Completed: false},
        ]);
      }
      setTask('');
    }
  };

  const toggleComplete = (index: number) => {
    const newList = [...list];
    newList[index].Completed = !newList[index].Completed;
    setList(newList);
  };

  const editTask = (index: number) => {
    setTask(list[index].name);
    setIsEdit(true);
    setEditId(index);
  };

  const deleteTask = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo App</Text>
      </View>
      <TodoInput
        task={task}
        setTask={setTask}
        addTask={addTask}
        isEdit={isEdit}
      />
      <CustomFlatList
        list={list}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    paddingTop: 40,
    backgroundColor: '#AB886D',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#E4E0E1',
  },
});
