import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {getAllNotes, Note} from '../services/noteStoreService';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../types';

const SavedNotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const navigation = useNavigation<ScreenNavigationProp>();

  useFocusEffect(() => {
    getAllNotes().then(result => setNotes(result.notes));
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {notes.length > 0 ? (
          notes.map(note => (
            <Pressable
              key={note.id}
              onPress={() => navigation.navigate('EditNote', {noteId: note.id})}
              style={({pressed}) => [
                styles.noteItem,
                pressed ? styles.noteItemPressed : null,
              ]}>
              <Text style={styles.noteText}>
                {note.text.length === 0 ? '(Blank notes)' : note.text}
              </Text>
            </Pressable>
          ))
        ) : (
          <Text style={styles.emptyText}>No notes saved yet.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default SavedNotesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    flex: 1,
  },
  noteItem: {
    backgroundColor: '#ffffff',
    marginBottom: 15,
    padding: 20,
    borderRadius: 10,
    borderColor: '#dcdcdc',
    elevation: 2,
  },
  noteItemPressed: {
    backgroundColor: '#eae6f4',
  },
  noteText: {
    fontSize: 18,
    color: '#5c2a75',
  },
  emptyText: {
    fontSize: 16,
    color: '#bbb',
    textAlign: 'center',
    marginTop: 20,
  },
});
