import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para todas as chamadas se necessário passar o Token
//Api.interceptors.request.use(async function (config) {
//  const token = await AsyncStorage.getItem('@RNAuth:accessToken');
//  config.headers.Authorization = token ? `Bearer ${token}` : '';
//  return config;
//});

export default Api;
