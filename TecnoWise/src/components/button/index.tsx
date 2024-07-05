import React from 'react';

import { StyleProp, TextStyle } from 'react-native';
import { Button } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

import { styles } from './styles';

type Props = {
  title: string;
  onPress?(): void;
  loading?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  buttonColor?: string | undefined;
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
  icon?: IconSource | undefined;
  disabled?: boolean;
};

export function ButtonDefaunt({
  onPress,
  loading,
  title,
  labelStyle,
  mode,
  buttonColor,
  icon,
  disabled,
}: Props) {
  return (
    <Button
      disabled={disabled}
      onPress={onPress}
      loading={loading}
      buttonColor={buttonColor}
      style={styles.button}
      labelStyle={labelStyle}
      mode={mode}
      icon={icon}
    >
      {title}
    </Button>
  );
}
