import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDeletePostsMutation, useGetPostsQuery} from '../redux/api';
import {Post, ScreenNavigationProp} from '../types';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PostScreen = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const {isLoading, isError, data, error} = useGetPostsQuery('');
  const [deletePost] = useDeletePostsMutation();

  if (isLoading)
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#5c2a75" />
      </View>
    );

  if (isError)
    return (
      <Text style={styles.errorText}>
        Error loading posts: {(error as any).message}
      </Text>
    );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Manage Your Posts</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item: Post) => item.id}
        renderItem={({item}: {item: Post}) => (
          <View style={styles.item}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.views}>Views: {item.views}</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deletePost(item.id)}>
              <Icon name="delete" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      />
      <Button
        title="Add New Post"
        func={() => navigation.navigate('AddPost')}
      />
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  header: {
    backgroundColor: '#3e1c3c',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 20,
    borderRadius: 12,
    elevation: 3,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5c2a75',
  },
  views: {
    fontSize: 14,
    color: '#888',
  },
  deleteButton: {
    padding: 10,
    backgroundColor: '#3e1c3c',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
