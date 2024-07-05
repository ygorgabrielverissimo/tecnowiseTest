import React from 'react';

import LogoP from '../../assets/images/tecnowise_logo.jpeg';
import { Image } from 'react-native';


export function Logo() {
  return <Image source={LogoP} style={{ width: 150, height: 130}}/>;
}
