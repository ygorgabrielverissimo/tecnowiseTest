
import { Login, Token } from '../utils/models/userModel';
import Api from './api';


export const Auth = async (data: Login) => {
  if(data.user === 'teste' && data.password === '123'){
    const res: Token = {
      accessToken: 'falke213123',
      expiresIn: '15021993'
    }
    return res.accessToken;
  }else {
    return 
  }
};


