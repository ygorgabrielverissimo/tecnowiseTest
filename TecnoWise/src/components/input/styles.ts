import { StyleSheet } from 'react-native';

export const styles = (color: string) =>
  StyleSheet.create({
    TextInput: {
      width: '100%',
      height: 56,
      fontSize: 16,
      marginBottom: 8,
      backgroundColor: color,
    },
    icon: {
      width: 26,
      height: 26,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
  });
