import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import NoteTakingInput from '../components/NoteTakingInput';
import {useNavigation, useRoute} from '@react-navigation/native';
import {EditScreenRouteProp, ScreenNavigationProp} from '../types';
import Button from '../components/Button';
import {deleteNote} from '../services/noteStoreService';

const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProp>();
  const navigation = useNavigation<ScreenNavigationProp>();
  const noteId = route.params.noteId;

  const deleteNoteHandler = async () => {
    await deleteNote(noteId ?? '');
    navigation.popTo('Home');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? 'Edit Note' : 'New Note',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <NoteTakingInput noteId={noteId} />
      {noteId && <Button title="Delete" func={deleteNoteHandler} />}
    </View>
  );
};

export default EditNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#f0e6f6',
  },
});
