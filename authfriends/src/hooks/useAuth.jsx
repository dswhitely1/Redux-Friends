import jwt_decode from 'jwt-decode';
import {
  useEffect,
  useState
} from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useAuth = () => {
  const [isKey, getLS, setLS, delLS] = useLocalStorage( 'login_token' );
  const [auth, setAuth]              = useState( false );

  useEffect( () => {
    if (isKey()) {
      const token       = jwt_decode( getLS() );
      const currentDate = Date.now() / 1000;
      if (token.exp < currentDate) {
        setAuth( false );
        delLS();
      } else {
        setAuth( true );
      }
    }
  }, [] );

  const setNewToken = newToken => setLS( newToken );

  const logOut = () => {
    delLS();
    setAuth(false);
  };

  return [auth, setNewToken, logOut];
};