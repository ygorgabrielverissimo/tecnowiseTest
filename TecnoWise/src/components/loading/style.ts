import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${(props: { color: any }) => props.color};
  margin-bottom: 18px;
`;
