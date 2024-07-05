import * as React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';
import { ButtonText, Container, Content, SubTitle, Title } from './styles';

type Props = {
  title: string;
  subTitle: string;
  titleButton: string;
  visible: boolean;
  hideDialog: () => void;
};

const DialogModel = ({
  visible,
  hideDialog,
  title,
  subTitle,
  titleButton,
}: Props) => {
  return (
    <Portal>
      <Dialog
        style={{ backgroundColor: '#FDFCFF' }}
        visible={visible}
        onDismiss={hideDialog}
      >
        <Container>
          <Content>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </Content>
        </Container>
        <Dialog.Actions>
          <Button onPress={hideDialog}>
            <ButtonText>{titleButton}</ButtonText>
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogModel;

{
  /* <Portal>
<Dialog visible={visible} onDismiss={hideDialog}>
  <Dialog.Title>Alert</Dialog.Title>
  <Dialog.Content>
    <Text variant="bodyMedium">This is simple dialog</Text>
  </Dialog.Content>
  <Dialog.Actions>
    <Button onPress={hideDialog}>Entendi</Button>
  </Dialog.Actions>
</Dialog>
</Portal> */
}
