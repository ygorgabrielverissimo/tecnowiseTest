import * as React from 'react';

import { Snackbar } from 'react-native-paper';

import { Container } from './styles';

type Props = {
  title: string;
  visible: boolean;
  onDismissSnackBar: () => void;
};

const SnackBarEdition = ({ visible, onDismissSnackBar, title }: Props) => {
  return (
    <Container>
      <Snackbar
        duration={3000}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: ' X ',
          onPress: () => {
            onDismissSnackBar;
          },
        }}
      >
        {title}
      </Snackbar>
    </Container>
  );
};

export default SnackBarEdition;
