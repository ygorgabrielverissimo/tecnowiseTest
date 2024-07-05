import styled from 'styled-components/native';
import { theme } from '../../themes';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  align-self: stretch;
`;

export const Contenthigher = styled.View`
  display: flex;
  padding: 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: #edf0f0;
`;
export const ContainerFooter = styled.View`
  flex: 1;
`;

export const Higher = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

export const ContentTitle = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const ContentInput = styled.View`
  display: flex;
  height: 56px;
  justify-content: center;
  align-self: stretch;
`;
export const Title = styled.Text`
  color: ${theme.colors.primary};
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;
export const SubTitle = styled.Text`
  color: ${theme.colors.secondary};
  text-align: center;
  align-self: stretch;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

export const ContentItem = styled.View`
  width: 100%;
  height: 56px;
  background: #f8fafa;
`;
export const Item = styled.TouchableOpacity`
  padding: 8px 24px 8px 16px;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  border: 1px;
  border-color: #dae4e5;
`;
export const ContentAvatar = styled.View`
  display: flex;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: rgba(27, 156, 165, 0.14);
`;
export const ContentItemTitle = styled.View`
  display: flex;
  justify-content: center;
  width: 290px;
`;
export const ItemTitle = styled.Text`
color: #191c1d;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.15px;
width: 100%;
height: 24px;
`;
