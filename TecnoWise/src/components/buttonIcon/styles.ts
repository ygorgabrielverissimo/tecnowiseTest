import { styled } from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;
export const Content = styled.TouchableOpacity`
  display: flex;
  padding: 8px 24px 8px 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex: 1;
  align-self: stretch;
`;

export const ContentImage = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentTitle = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  margin-top: -1px;
`;
export const Title = styled.Text`
  color: #191c1d;
  /* M3/body/large */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.5px;
`;
