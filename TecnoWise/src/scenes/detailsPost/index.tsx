import React from 'react';

import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Container, Content, ContentInfo, ContentTitle, StatusFalse, StatusTrue, Title } from './styles';
import { Post } from '../../utils/models/posts';

const DetailsPost = () => {
  const route = useRoute();
  const post = route.params as Post;

  return (
    <ScrollView>
      <Container>
        <Content>
          <ContentInfo>
            <Title>{'Id:'}</Title>
            <ContentTitle>{post.id}</ContentTitle>
            <Title>{'UserId:'}</Title>
            <ContentTitle>{post.userId}</ContentTitle>
            <Title>{'Titulo:'}</Title>
            <ContentTitle>{post.title}</ContentTitle>
            <Title>{'conteúdo:'}</Title>
            <ContentTitle>{post.body}</ContentTitle>
            <Title>{'Status:'}</Title>
            {post.userId === 1 ? (
              <StatusTrue>{'Completo'}</StatusTrue>
            ) : (
              <StatusFalse>{'Inconpleto'}</StatusFalse>
            )}
          </ContentInfo>
        </Content>
      </Container>
    </ScrollView>
  );
};

export default DetailsPost;
