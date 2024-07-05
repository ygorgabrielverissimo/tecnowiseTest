import { styled } from 'styled-components/native';
import { theme } from '../../themes';

export const Container = styled.View`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  flex: 1;
`;

export const Content = styled.View`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 16px;
  background: #f8fafa;
`;

export const ContentInfo = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
export const Title = styled.Text`
  color: #626262;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
`;
export const ContentTitle = styled.Text`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin-bottom: 16px;
`;

export const StatusTrue = styled.Text`
  color: ${theme.colors.primary};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin-bottom: 16px;
`;

export const StatusFalse = styled.Text`
  color: ${theme.colors.error};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin-bottom: 16px;
`;
