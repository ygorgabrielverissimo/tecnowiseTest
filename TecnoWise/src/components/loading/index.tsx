import React from 'react';

import { ActivityIndicator } from 'react-native';

import { theme } from '../../themes';
import { Container } from './style';

type Props = {
  color: string;
};

export const Loading = ({ color }: Props) => {
  return (
    <Container color={color}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Container>
  );
};
