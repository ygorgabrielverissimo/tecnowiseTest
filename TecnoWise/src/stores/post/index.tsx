import AsyncStorage from '@react-native-async-storage/async-storage';
import { Post } from '../../utils/models/posts';

export async function setDataPost(data: Post[]) {
  await AsyncStorage.setItem('@RNAuth:Post', JSON.stringify(data));
}

export async function getDataPost(): Promise<Post[]> {
  const result = await AsyncStorage.getItem('@RNAuth:Post');
  return JSON.parse(result ?? ' ') as Post[]
}
  