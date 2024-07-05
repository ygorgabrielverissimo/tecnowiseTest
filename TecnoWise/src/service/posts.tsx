import { Post } from '../utils/models/posts';
import Api from './api';

const basePosts = '/posts'

export const PostsSearch = async () => {
  const response = await Api.get<Post[]>(`${basePosts}`);
  return response.data;
};

export const PostsAdd = async (data: Post) => {
  const response = await Api.post<Post>(`${basePosts}`, data);
  return response.status;
};

export const PostsDelete = async (Id: number): Promise<boolean> => {
  const response = await Api.delete(`${`${basePosts}`}/${Id}`);
  const code = response?.status;
  if (code !== 200) {
    return false;
  }
  return true;
};
