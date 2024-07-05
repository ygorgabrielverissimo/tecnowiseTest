import { styled } from 'styled-components/native';
import { theme } from '../../themes';

export const PostContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 130px;
  gap: 16px;
  border-radius: 12px;
  background: #f8fafa;
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 8px;
`;

export const PostContent = styled.View`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 16px 8px 16px 16px;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

export const ContentInfos = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  height: 68px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1;
`;

export const ContentTralling = styled.TouchableOpacity`
  justify-content: center;
  width: 24px;
  height: 68px;
  gap: 4px;
`;

export const ContentIdType = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  align-self: stretch;
  margin-botton: 4px;
`;

export const IdAndType = styled.Text`
  color: #626262;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

export const Id = styled.View`
display: flex;
align-items: flex-start;
gap: 4px;
flex-direction: row;
`;



export const ContentCharacter = styled.Text`
  color: #626262;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

export const Character = styled.Text`
  color: #626262;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

export const NameDoc = styled.Text`
  color: #191c1d;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const Data = styled.Text`
  color: #626262;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

export const VersionTrue = styled.View`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px ${theme.colors.primary};
  width: 108px;
  height: 20px;
  margin-right: -36px;
`;

export const VersionFalse = styled.View`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px ${theme.colors.error};
  width: 108px;
  height: 20px;
  margin-right: -36px;
`;

export const TextTrue = styled.Text`
  color: ${theme.colors.primary};
  text-align: center;
  /* M3/label/medium */
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.5px;
`;

export const Textfalse = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  /* M3/label/medium */
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.5px;
`;
