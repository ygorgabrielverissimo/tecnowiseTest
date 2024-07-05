
import styled from 'styled-components/native';

import { theme } from '../../themes';

interface openKeyboard {
  size: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContentImage = styled.View`
  width: 100%;
  height: 15%;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
  margin-bottom: 40px;
  `

export const ContentInput = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  margin-top: 12px;
  margin-bottom: 24px;
`;

export const ContentInputId = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 24px;
`;

export const ContentTerms = styled.View`
  width: 280px;
  margin-top: 70px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TermsTitle = styled.Text`
  color: ${theme.colors.white};
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

export const TitleLink = styled.Text`
  text-decoration: underline;
  text-decoration-color: ${theme.colors.white};
`;
















