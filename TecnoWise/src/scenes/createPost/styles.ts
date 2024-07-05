import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../themes';

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8fafa;
`;

export const Content = styled.View`
  display: flex;
  padding: 16px 16px 32px 16px;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  align-self: stretch;
`;

export const ContentButton = styled.View`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  align-self: stretch;
  border-top: 1px;
  border-color: 'rgba(0, 0, 0, 0.12)';
  background: #f8fafa;
`;

export const Title = styled.Text`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
  margin-top: 5px;
  margin-bottom: 8px;
`;

export const ContainerInput = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
  align-self: stretch;
  margin-top: -18px;
`;

export const InputData = styled.View`
  gap: 16px;
`;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dropdown: {
    width: '100%',
    height: 58,
    borderColor: theme.colors.outline,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 15,
    marginBottom: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    width: 80,
    position: 'absolute',
    backgroundColor: theme.colors.surface,
    color: theme.colors.onsurfacevariant,
    left: 8,
    top: -7,
    zIndex: 999,
    paddingHorizontal: 0,
    fontSize: 13,
    fontFamily: 'Roboto',
  },
  placeholderStyle: {
    fontSize: 16,
    color: theme.colors.onsurfacevariant,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: theme.colors.shadow,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  selectedStyle: {
    borderRadius: 12,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
