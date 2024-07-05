import AsyncStorage from '@react-native-async-storage/async-storage';
import { Token } from '../../utils/models/userModel';

export async function setDataToken(data: string) {
  await AsyncStorage.setItem('@RNAuth:accessToken', data);
}

export async function getDataToken() {
  return await AsyncStorage.getItem('@RNAuth:accessToken');
}
