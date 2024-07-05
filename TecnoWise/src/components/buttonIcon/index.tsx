import React, { ReactElement } from 'react';

import {
  Container,
  Content,
  ContentImage,
  ContentTitle,
  Title,
} from './styles';

type props = {
  title: string;
  icon?: ReactElement;
  onClick: (id?: any) => void;
};

const ButtonIcon = ({ title, icon, onClick }: props) => {
  return (
    <Container>
      <Content onPress={() => onClick()}>
        <ContentImage>{icon}</ContentImage>
        <ContentTitle>
          <Title>{title}</Title>
        </ContentTitle>
      </Content>
    </Container>
  );
};

export default ButtonIcon;
