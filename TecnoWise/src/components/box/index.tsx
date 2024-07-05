import React, { FC, ReactNode } from 'react';

import { Container, Content, ContentTitle, Subtitle, Title } from './styles';

type Props = {
  title: string;
  subTitle?: string;
  children: ReactNode;
  size?: any;
};

const Box: FC<Props> = ({ title, subTitle, children, size }) => {
  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>{title}</Title>
          <Subtitle>{subTitle}</Subtitle>
        </ContentTitle>
        {children}
      </Content>
    </Container>
  );
};

export default Box;
