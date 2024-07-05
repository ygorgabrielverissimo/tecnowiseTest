import * as React from 'react';

import { Avatar } from 'react-native-paper';

import { theme } from '../../themes';

type Props = {
  name: string;
};

export function AvatarName({ name }: Props) {
  const nameInitial = (value: string) => {
    if (value) {
      const matches = value.substr(0, 3);
      const valueJoin = matches.toUpperCase();
      if (!valueJoin) return '';
      return valueJoin;
    }
    return '';
  };

  return (
    <Avatar.Text
      size={40}
      label={nameInitial(name)}
      color={theme.colors.onprimarycontainer}
      style={{ backgroundColor: '#DAE4E5', borderRadius: 12 }}
      labelStyle={{
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.8,
      }}
    />
  );
}
