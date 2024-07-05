import React, { useContext } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../scenes/login';

const AuthRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
