import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import React from 'react';
import Routes from './routes';
import {AuthProvider} from './contexts/auth';

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
