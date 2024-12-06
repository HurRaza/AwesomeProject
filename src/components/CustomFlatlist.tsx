import {FlatList, StyleSheet, View} from 'react-native';
import SavedTaskList from './SavedTaskList';
import React from 'react';

type Task = {
  id: string;
  name: string;
  Completed: boolean;
};

type Props = {
  list: Task[];
  editTask: (index: number) => void;
  deleteTask: (index: number) => void;
  toggleComplete: (index: number) => void;
};

const CustomFlatList: React.FC<Props> = ({
  list,
  editTask,
  deleteTask,
  toggleComplete,
}) => {
  return (
    <View style={styles.itemCont}>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <SavedTaskList
            index={index}
            name={item.name}
            Completed={item.Completed}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemCont: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
  },
});

export default CustomFlatList;
