import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.110:3000/',
  }),
  tagTypes:['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({
      query: () => 'posts',
      providesTags:['Posts']
    }),
    addPosts: builder.mutation<Post,Post>({
        query: (newPost) =>({
            url: 'posts',
            method: 'POST',
            body: newPost
        }),
        invalidatesTags:['Posts'],
    }),
    deletePosts: builder.mutation<void,string>({
        query: (id) =>({
            url: `posts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags:['Posts'],
    })
  }),
});

export const { useGetPostsQuery, useAddPostsMutation , useDeletePostsMutation} = postsApi;