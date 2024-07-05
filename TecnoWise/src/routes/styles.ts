import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../themes';

export const ContentHeader = styled.View`
  height: 120;
  background-color: antiquewhite;
`;

export const Header = styled.Text`
  text-align: center;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: ${theme.colors.onsurface};
`;

export const ContentVersion = styled.View`
  display: inline-flex;
  flex-direction: row;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ContentIcon = styled.View`
  display: flex;
  width: 28px;
  height: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: aliceblue;
  margin: 12px
`;

export const TitleVersion = styled.Text`
  color: #3f484a;
  text-align: center;
  /* M3/body/medium */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;

  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
`;
export const Opacity = styled.TouchableOpacity`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    height: 300,
  },
});
