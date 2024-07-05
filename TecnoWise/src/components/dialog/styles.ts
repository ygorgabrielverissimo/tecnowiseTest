import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  width: 312px;
  height: 180px;
  flex-direction: column;
  align-items: flex-end;
`;

export const Content = styled.View`
  display: flex;
  padding: 24px 24px 0px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  margin-top: -12px;
`;

export const Title = styled.Text`
  align-self: stretch;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: #191c1d;
`;

export const SubTitle = styled.Text`
  color: #3f484a;
  align-self: stretch;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
`;

export const ButtonText = styled.Text`
  color: #006971;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
`;
