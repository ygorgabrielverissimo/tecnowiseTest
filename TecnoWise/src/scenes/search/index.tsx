import React, { useEffect, useRef, useState } from 'react';

import { Alert, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AvatarName } from '../../components/avatarName';
import { DismissKeyboard } from '../../components/dismissKeyboard';
import { Input } from '../../components/input';
import { Loading } from '../../components/loading';
import SnackBarEdition from '../../components/snackBarEdition';
import { useAuth } from '../../contexts/auth';

import { theme } from '../../themes';

import {
  Container,
  ContainerFooter,
  ContentAvatar,
  ContentInput,
  ContentItem,
  ContentItemTitle,
  ContentTitle,
  Contenthigher,
  Higher,
  Item,
  ItemTitle,
  SubTitle,
  Title,
} from './styles';
import { PostsSearch } from '../../service/posts';
import { Post } from '../../utils/models/posts';

function Search() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(Number);
  const [data, setData] = useState<Post[]>([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [snackVisible, setSnackVisible] = useState(false);

  const refRBSheet = useRef() as React.MutableRefObject<any>;
  const route = useRoute();

  const { signOut } = useAuth();

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, [filter]);

  const getPosts = async () => {
    try {
      const result = await PostsSearch();
      setData(result);
    } catch (e) {
      Alert.alert('Erro ao chamar serviço de API, tente novamente mais tarde!');
      return
    }
    setLoading(false);
  };

  const searchFilterFunction = (text: string) => {
    if (text.length > 0) {
      const newData = data.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      setFilter(Math.random());
      setSearch(text);
    }
  };

  function handlePost(item: Post) {
    navigation.navigate('DetailsPost', item);
  }

  return (
    <DismissKeyboard>
      {loading ? (
        <Loading color={theme.colors.surface} />
      ) : (
        <Container>
          <Contenthigher>
            <Higher>
              <ContentTitle>
                <Title>{'Lista de Posts'}</Title>
                <SubTitle>{'Busque pelo título'}</SubTitle>
              </ContentTitle>
              <ContentInput>
                <Input
                  value={search}
                  keyboardType={'default'}
                  returnKeyType={'done'}
                  mode={'outlined'}
                  label={'Digite o título de busca'}
                  onChangeText={(text: string) => searchFilterFunction(text)}
                  autoCapitalize="none"
                />
              </ContentInput>
            </Higher>
          </Contenthigher>
          <ContainerFooter>
            {loading ? (
              <Loading color={theme.colors.surface} />
            ) : (
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <ContentItem >
                    <Item onPress={() => handlePost(item)} numberOfLines={1}>
                      <ContentAvatar>
                        <AvatarName name={item.title} />
                      </ContentAvatar>
                      <ContentItemTitle>
                        <ItemTitle numberOfLines={1} >{item.title}</ItemTitle>
                      </ContentItemTitle>
                    </Item>
                  </ContentItem>
                )}
                horizontal={false}
              />
            )}
          </ContainerFooter>
        </Container>
      )}
    </DismissKeyboard>
  );
}

export default Search;
