import {useState} from 'react';

export const useToggle = initialState => {
  const [useToggle, setToggle] = useState(initialState);

  const toggleState = () => {
    setToggle(!useToggle);
  };

  return [useToggle, toggleState]
};