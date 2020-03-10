import { useState } from 'react';

export const useLocalStorage = ( key ) => {
  const [lsKey, setLSKey]= useState( key );

  const testKey = () => {
    if (localStorage.getItem( lsKey )) {
      return true;
    }
    return false;
  };

  const getItem = () => localStorage.getItem( lsKey );

  const setItem = value => localStorage.setItem( lsKey, value );

  const removeItem = () => localStorage.removeItem( lsKey );

  return [testKey, getItem, setItem, removeItem];

};