import React, { useEffect, useRef, useState } from 'react';

import { Alert, FlatList, Image, Touchable } from 'react-native';

import { useIsFocused, useNavigation } from '@react-navigation/native';

import BottomSheet from '../../components/bottomSheet';
import ButtonIcon from '../../components/buttonIcon';

import { Loading } from '../../components/loading';
import SnackBar from '../../components/snackBar';

import Icon from '../../assets/icons/delete.png';
import Edit from '../../assets/icons/edit.png';
import Download from '../../assets/icons/download.png';
import Plus from '../../assets/icons/plus.png';
import Search from '../../assets/icons/search.png';

import {
  Caracter,
  Container,
  Content,
  ContentNavigation,
  NamberText,
  ResultNumber,
  RouteBotton,
  TextNavigation,
} from './styles';
import { Post } from '../../utils/models/posts';
import { PostsDelete, PostsSearch } from '../../service/posts';
import CardPost from '../../components/CardPost';
import { getDataPost, setDataPost } from '../../stores/post';

function Posts() {
  const navigation = useNavigation();

  const [data, setData] = useState<Post[]>([]);
  const [post, setPost] = useState<Post>()
  const [postId, setPostId] = useState<Post>();
  const refRBSheet = useRef() as React.MutableRefObject<any>;
  const [snackVisible, setSnackVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    getPosts();
  }, [isFocused]);

  const getPosts = async () => {
    console.log('A');
    try {
      const dataPostSotre = await getDataPost()
      if(dataPostSotre){
        setData(dataPostSotre);
        return
      }
      const result = await PostsSearch();
      setData(result);
      await setDataPost(result);
    } catch (e) {
      Alert.alert('Erro ao chamar serviço de API, tente novamente mais tarde!');
      return;
    }
    setLoading(false);
  };

  function handlePost(item: Post) {
    setPostId(item);
    navigation.navigate('DetailsPost', item);
  }

  async function exclude() {
    try {
      const result = await PostsDelete(post?.id)
      if(result){
        refRBSheet.current.close();
        const filter =data.filter((d) => d.id !== post?.id)
        setData(filter);
        await setDataPost(filter);
        setSnackVisible(true);
      }
      refRBSheet.current.close();
      
    } catch (error) {
      Alert.alert("Erro ao chamar API");
      refRBSheet.current.close();
    }
   
  }
  function close() {
    refRBSheet.current.close();
  }
  
  function stateSnackBar() {
    refRBSheet.current?.close();
    setSnackVisible(false);
  }

  return (
    <Container>
      <ContentNavigation>
        <Caracter>{'Posts'}</Caracter>
        <Caracter>{'>'}</Caracter>
        <RouteBotton onPress={() => navigation.navigate('Search')}>
          <TextNavigation>{'Busca Avançada'}</TextNavigation>
        </RouteBotton>
      </ContentNavigation>
      <Content>
        <ResultNumber>
          <NamberText>{data.length} Resultado</NamberText>
          <RouteBotton onPress={() => navigation.navigate('CreatePost')}>
            <Image source={Plus} style={{ marginRight: 10 }} />
          </RouteBotton>
          <RouteBotton onPress={() => navigation.navigate('Search')}>
            <Image source={Search} />
          </RouteBotton>
        </ResultNumber>
        <FlatList
          style={{ width: '100%', marginBottom: loading ? 18 : 0 }}
          data={data}
          scrollEnabled={true}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <>
              <CardPost
                id={item.id}
                userId={item.userId}
                titulo={item.title}
                bory={item.body}
                versionId={item.userId}
                options={() => {
                  setPost(item)
                  refRBSheet?.current?.open();
                }}
                onPress={() => {
                  handlePost(item);
                }}
              />
              <BottomSheet useRef={refRBSheet}>
                <ButtonIcon
                  title={'Excluir'}
                  icon={<Image source={Icon} />}
                  onClick={exclude}
                />
                <ButtonIcon
                  title={'Editar'}
                  icon={<Image source={Edit} />}
                  onClick={close}
                />
                <ButtonIcon
                  title={'Download'}
                  icon={<Image source={Download} />}
                  onClick={close}
                />
              </BottomSheet>
            </>
          )}
          horizontal={false}
        />
        {loading && <Loading color={'#edf0f0'} />}
        <SnackBar
          visible={snackVisible}
          onDismissSnackBar={stateSnackBar}
          title={'Post Excluído com sucesso!'}
        />
      </Content>
    </Container>
  );
}

export default Posts;
