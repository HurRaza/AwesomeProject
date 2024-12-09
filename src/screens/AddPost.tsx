import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAddPostsMutation} from '../redux/api';
import {showToast} from '../components/ToastUtils';
import {ScreenNavigationProp} from '../types';
import Button from '../components/Button';

const AddPostScreen = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [title, setTitle] = useState('');
  const [views, setViews] = useState('');
  const [addPost] = useAddPostsMutation();

  const handleSubmit = async () => {
    if (title.trim() && views) {
      const newPost = {
        id: Date.now().toString(),
        title,
        views: Number(views),
      };
      try {
        await addPost(newPost);
        navigation.goBack();
      } catch (error) {
        console.error('Error adding post:', error);
      }
    } else {
      showToast('Please fill out all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor="#ccc"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Views"
        placeholderTextColor="#ccc"
        value={views}
        onChangeText={setViews}
        keyboardType="numeric"
      />
      <Button title="Add Post" func={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#5c2a75',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});

export default AddPostScreen;
