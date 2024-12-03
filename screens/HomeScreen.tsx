import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../types';
import SavedNotesList from '../components/SavedNotesList';
import Button from '../components/Button';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const saveNoteHandler = () => {
    navigation.navigate('EditNote', {noteId: undefined});
  };

  return (
    <View style={styles.container}>
      <SavedNotesList />
      <Button title="Add" func={saveNoteHandler} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#f0e6f6',
  },
});
