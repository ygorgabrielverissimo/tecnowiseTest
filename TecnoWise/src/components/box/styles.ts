import styled from 'styled-components/native';
import { theme } from '../../themes';

export const Container = styled.View`
  display: flex;
  width: 86%;
  padding: 24px 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  background: #f8fafa;
`;
export const Content = styled.View`
  width: 100%;
`;
export const ContentTitle = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;
export const Title = styled.Text`
  color: ${theme.colors.primary};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.18px;
`;
export const Subtitle = styled.Text`
  color: ${theme.colors.secondary};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.5px;
`;
