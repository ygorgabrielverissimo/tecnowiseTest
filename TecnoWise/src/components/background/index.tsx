import React, { ReactNode } from 'react';

import LinearGradient from 'react-native-linear-gradient';

import { theme } from '../../themes';
import { styles } from './styles';

type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {
  return (
    <LinearGradient
      colors={[
        theme.colors.primary,
        theme.colors.primary,
        theme.colors.primary,
      ]}
      style={styles.linearGradient}
    >
      {children}
    </LinearGradient>
  );
}
