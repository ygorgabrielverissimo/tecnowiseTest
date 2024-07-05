import React from 'react';

import { Platform, SafeAreaView, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { useAuth } from '../contexts/auth';
import { theme } from '../themes';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { styles } from './styles';
import Login from '../scenes/login';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();
  return loading ? (
    <View style={styles.loading}>
      <ActivityIndicator size={'large'} color={theme.colors.primary} />
    </View>
  ) : signed ? (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.surface2 }}>
        <AppRoutes />
      </SafeAreaView>
    </>
  ) : (
    <Login />
  );
};

export default Routes;
