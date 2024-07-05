import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Token } from '../utils/models/userModel';
import { getDataToken, setDataToken } from '../stores/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth } from '../service/auth';

type Props = {
  children: ReactNode;
};

interface AuthContextData {
  signed: boolean;
  signIn(user: string, senha: string): Promise<boolean>;
  signOut(): Promise<void>;
  user: string | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoregeUser() {
      const token = await getDataToken();
      if (token) {
        setUser(token);
        setLoading(false);
      }
      setLoading(false);
    }
    loadStoregeUser();
  }, []);

  const signIn = async (user: string, password: string) => {
    const response = await Auth({
      user: user,
      password: password,
    });
    if (response) {
       setUser(response); 
       await setDataToken(response);
      return true;
    } else {
      return false;
    }
  };

  async function signOut() {
    AsyncStorage.clear(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user: user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
