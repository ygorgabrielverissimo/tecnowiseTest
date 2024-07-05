import { StyleSheet } from 'react-native';

import { theme } from '../../themes';

export const styles = (color: string) =>
  StyleSheet.create({
    TextInput: {
      width: '100%',
      fontSize: 16,
      borderRadius: 4,
      marginBottom: 24,
      backgroundColor: color,
      color: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    icon: {
      width: 26,
      height: 26,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
  });
