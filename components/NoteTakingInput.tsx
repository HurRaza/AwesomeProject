import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getNote, saveNote} from '../services/noteStoreService';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../types';
import Button from './Button';

type Props = {
  noteId: string | undefined;
};

const NoteTakingInput: React.FC<Props> = ({noteId}) => {
  const [text, setText] = useState<string>('');
  const navigation = useNavigation<ScreenNavigationProp>();

  const saveNoteHandler = async () => {
    await saveNote(text, noteId);
    navigation.popTo('Home');
  };

  useEffect(() => {
    if (noteId) {
      getNote(noteId).then(result => setText(result?.text ?? ''));
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          multiline={true}
          style={styles.input}
          value={text}
          onChangeText={setText}
          autoFocus={true}
          placeholder="Write your note here..."
          placeholderTextColor="#B2A59D"
        />
      </View>
      <Button title="Save" func={saveNoteHandler} />
    </View>
  );
};

export default NoteTakingInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputWrapper: {
    backgroundColor: '#fff',
    margin:20,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  input: {
    backgroundColor: '#f0e6f6',
    width: '100%',
    height: 200,
    fontSize: 16,
    padding: 20,
    borderRadius: 10,
    textAlignVertical: 'top',
    color: '#5c2a75',
  },
});
