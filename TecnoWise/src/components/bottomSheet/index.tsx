import React, { ReactNode } from 'react';

import RBSheet from 'react-native-raw-bottom-sheet';

import { theme } from '../../themes';
import { Container } from './style';

type props = {
  useRef: React.MutableRefObject<any>;
  children: ReactNode;
};

const BottomSheet = ({ useRef, children }: props) => {
  return (
    <RBSheet
      ref={useRef}
      closeOnPressMask={true}
      customStyles={{
        container: {
          height: 270,
          borderTopEndRadius: 16,
          borderTopStartRadius: 16,
          padding: 16,
          flexDirection: 'column',
          gap: 12,
          backgroundColor: theme.colors.surface2,
        },
        draggableIcon: {
          backgroundColor: '#6F797A',
        },
      }}
    >
      <Container>{children}</Container>
    </RBSheet>
  );
};

export default BottomSheet;
