import React, { useEffect, useRef } from 'react';

import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/auth';

import Search from '../scenes/search';
import Posts from '../scenes/posts';
import DetailsPost from '../scenes/detailsPost';
import CreatePost from '../scenes/createPost';
import { theme } from '../themes';

import {
  ContentIcon,
  ContentVersion,
  Header,
  TitleVersion,
  Opacity,
} from './styles';
import BottomSheet from '../components/bottomSheet';
import ButtonIcon from '../components/buttonIcon';

import Logout from '../assets/icons/logout.png';
import Leading from '../assets/icons/Leading.png';
import user from '../assets/icons/user.png';
import Version from '../assets/images/version.png';
import { Image } from 'react-native';

const AppRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const { signOut } = useAuth();
  const refRBSheet = useRef() as React.MutableRefObject<any>;

  async function loGout() {
    await signOut();
    refRBSheet.current.close();
  }

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: theme.colors.onsurface,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: theme.colors.onsurface,
          },
          headerStyle: {
            backgroundColor: theme.colors.surface2,
          },
          headerBackTitle: ' ',
          headerBackTitleStyle: {
            fontSize: 0.1,
          },
          headerTitle: (props) => <Header {...props} />,
        }}
      >
        <Stack.Screen
          name="Posts"
          component={Posts}
          options={{
            title: 'Posts',
            headerBackButtonMenuEnabled: false,
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerRight: (props) => {
              return (
                <Opacity onPress={() => refRBSheet.current.open()}>
                  <Image source={user} {...props} />
                </Opacity>
              );
            },
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={({ route }: any) => ({ title: 'Busca' })}
        />
        <Stack.Screen
          name="DetailsPost"
          component={DetailsPost}
          options={({ route }: any) => ({ title: 'Detalhes' })}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePost}
          options={({ route }: any) => ({ title: 'Publicar' })}
        />
      </Stack.Navigator>

      <BottomSheet useRef={refRBSheet}>
        <ButtonIcon
          title={'Alterar a senha'}
          icon={<Image source={Leading} />}
          onClick={() => refRBSheet.current.close()}
        />

        <ButtonIcon
          title={'Sair'}
          icon={<Image source={Logout} />}
          onClick={loGout}
        />
        <ContentVersion>
          <ContentIcon>
            <Image source={Version} />
          </ContentIcon>
          <TitleVersion>Verison 1.0 </TitleVersion>
        </ContentVersion>
      </BottomSheet>
    </>
  );
};

export default AppRoutes;
