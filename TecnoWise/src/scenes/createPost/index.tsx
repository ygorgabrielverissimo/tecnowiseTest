import React, { useEffect, useRef, useState } from 'react';
import { Alert, Dimensions, ScrollView, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ButtonDefaunt } from '../../components/button';
import DialogModel from '../../components/dialog';
import { DismissKeyboard } from '../../components/dismissKeyboard';
import Divider from '../../components/divider';
import { theme } from '../../themes';

import { Container, Content, ContentButton, Title } from './styles';
import { Post } from '../../utils/models/posts';
import { Input } from '../../components/input';
import { PostsAdd } from '../../service/posts';
import { getDataPost, setDataPost } from '../../stores/post';

function CreatePost() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [bory, setBory] = useState('');
  const [post, setPost] = useState<Post>();

  const navigation = useNavigation();

  const hideDialog = () => setVisible(false);

  const userIdRef = useRef<any>();
  const titleRef = useRef<any>();
  const bodyRef = useRef<any>();

  async function handleCreatePost() {
    setLoading(true);
    try {
      const postData = { id: id, userId: userId, title: title, body: bory };
      const result = await PostsAdd(postData);

      if (result === 201) {
        const currentData =  await getDataPost();
        await setDataPost([...currentData, postData]);
        navigation.navigate('Posts');
      }
      setLoading(false);
    } catch (error) {
      Alert.alert('Error Chamada API');
      setLoading(false);
    }
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <DismissKeyboard>
        <Container>
          <Content>
            <Input
              placeholder={'Enter'}
              keyboardType="default"
              returnKeyType="done"
              maxLength={14}
              label={'ID publicação'}
              autoCapitalize="none"
              value={id}
              onSubmitEditing={() => userIdRef.current.focus()}
              onChangeText={(id) => setId(id)}
              mode={'outlined'}
            />
            <Input
              inputRef={userIdRef}
              placeholder={'Enter'}
              keyboardType="default"
              returnKeyType="done"
              maxLength={14}
              label={'ID do Usuário'}
              autoCapitalize="none"
              value={userId}
              onSubmitEditing={() => titleRef.current.focus()}
              onChangeText={(userId) => setUserId(userId)}
              mode={'outlined'}
            />
            <Divider />
            <Title>Título de publicação</Title>
            <Input
              inputRef={titleRef}
              placeholder={'Enter'}
              keyboardType="default"
              returnKeyType="done"
              label={'Título'}
              autoCapitalize="none"
              value={title}
              onSubmitEditing={() => bodyRef.current.focus()}
              onChangeText={(title) => setTitle(title)}
              mode={'outlined'}
            />
            <Divider />
            <Title>Conteúdo de texto do post</Title>
            <Input
              inputRef={bodyRef}
              placeholder={'Enter'}
              keyboardType="default"
              returnKeyType="done"
              label={'Conteúdo'}
              autoCapitalize="none"
              value={bory}
              onSubmitEditing={() => handleCreatePost()}
              onChangeText={(bory) => setBory(bory)}
              mode={'outlined'}
            />

            <ContentButton>
              <ButtonDefaunt
                onPress={() => handleCreatePost()}
                title={'Publicar'}
                buttonColor={theme.colors.primary}
                labelStyle={{ color: theme.colors.white }}
                loading={loading}
              />
            </ContentButton>
          </Content>
          <DialogModel
            visible={visible}
            hideDialog={hideDialog}
            title={'Teste de PERfor'}
            subTitle={'Teste de PERfor'}
            titleButton={'Teste de PERfor'}
          />
        </Container>
      </DismissKeyboard>
    </ScrollView>
  );
}

export default CreatePost;
