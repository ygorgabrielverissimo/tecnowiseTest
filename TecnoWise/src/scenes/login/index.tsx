import React, { useEffect, useRef, useState } from 'react';

import { Background } from '../../components/background';
import { useAuth } from '../../contexts/auth';

import { theme } from '../../themes';

import { Container, ContentImage, ContentInput, ContentTerms, TermsTitle, TitleLink } from './styles';
import { Alert, Linking } from 'react-native';
import { DismissKeyboard } from '../../components/dismissKeyboard';
import Box from '../../components/box';
import { Logo } from '../../components/logo';
import { ButtonDefaunt } from '../../components/button';
import { Input } from '../../components/input';
import { InputNumber } from '../../components/inputPassword';


function Login() {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef<any>();

  async function hangleLogin() {
    setLoading(true);
    if (user === '' || password.length === 0) {
      Alert.alert('É necessário digitar suas credenciais');
      setLoading(false);
      return;
    }

    try {
    const res = await signIn(user, password);
    if(!res){
      setLoading(false)
      Alert.alert('Credenciais inválidas, tente novamente!');
      return
    }
    } catch (error: any) {
      Alert.alert('Erro na chamada a API, entre em contato com o Administrador');
      setLoading(false);
    }
  }

  return (
    <Background>
      <DismissKeyboard>
        <Container>
          <ContentImage>
            <Logo />
          </ContentImage>
          <Box
            title={'Faça seu Login'}
            subTitle={'Sua melhor experiência é aqui!'}
          >
            <ContentInput>
              <Input
                placeholder={'Enter'}
                keyboardType="default"
                returnKeyType="done"
                maxLength={14}
                label={'Digite o seu usuário'}
                autoCapitalize="none"
                value={user}
                onSubmitEditing={() => passwordRef.current.focus()}
                onChangeText={(user) => setUser(user)}
                mode={'outlined'}
              />

              <InputNumber
                inputRef={passwordRef}
                placeholder={'Digite sua senha'}
                returnKeyType="done"
                keyboardType="default"
                label={'Digite a sua senha'}
                autoCapitalize="none"
                mode={'outlined'}
                onChangeText={(password) => setPassword(password)}
                onSubmitEditing={() => hangleLogin()}
                secureTextEntry={true}
              />
            </ContentInput>
            <ButtonDefaunt
              loading={loading}
              onPress={() => hangleLogin()}
              title={'Next'}
              buttonColor={theme.colors.primary}
              labelStyle={{ color: theme.colors.white }}
            />
          </Box>

          <ContentTerms>
              <TermsTitle>
                {'Ao fazer login, você concorda com os contratos de licença e'}
                <TitleLink
                  onPress={() =>
                    Linking.openURL('https://grupotecnowise.com.br/')
                  }
                >
                  {' Termos de Uso.'}
                </TitleLink>
              </TermsTitle>
            </ContentTerms>


        </Container>
      </DismissKeyboard>
    </Background>
  );
}

export default Login;
