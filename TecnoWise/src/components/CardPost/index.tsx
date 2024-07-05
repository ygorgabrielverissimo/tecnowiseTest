import React from 'react';

import TrallingImage from '../../assets/icons/Vector.png';
import {
  PostContainer,
  PostContent,
  Character,
  ContentIdType,
  ContentInfos,
  ContentTralling,
  IdAndType,
  NameDoc,
  TextTrue,
  Textfalse,
  VersionFalse,
  VersionTrue,
  Id,
} from './styles';
import { Image, View } from 'react-native';

type Props = {
  key?: string;
  id?: number;
  userId?: number;
  titulo?: string;
  bory?: string;
  versionId?: number;
  options: () => void;
  onPress?: () => void;
};

const CardPost = ({
  id,
  userId,
  titulo,
  bory,
  versionId,
  options,
  onPress,
}: Props) => {
  return (
    <PostContainer>
      <PostContent>
        <ContentInfos onPress={onPress}>
          <ContentIdType>
            <Id>
              <IdAndType>Id: {id}</IdAndType>
              <Character>|</Character>
              <IdAndType>Usuário: {userId}</IdAndType>
            </Id>
            {versionId === 1 ? (
              <VersionTrue>
                <TextTrue>{'Completo'}</TextTrue>
              </VersionTrue>
            ) : (
              <VersionFalse>
                <Textfalse>{'Inconpleto'}</Textfalse>
              </VersionFalse>
            )}
          </ContentIdType>
          <ContentIdType>
            <IdAndType numberOfLines={1}>Titulo: {titulo}</IdAndType>
          </ContentIdType>
          <ContentIdType>
            <NameDoc numberOfLines={2}>{bory}</NameDoc>
          </ContentIdType>
        </ContentInfos>

        <ContentTralling onPress={() => options()}>
          <Image source={TrallingImage} />
        </ContentTralling>
      </PostContent>
    </PostContainer>
  );
};

export default CardPost;
