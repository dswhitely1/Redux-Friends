import { useEffect } from 'react';
import { useToggle } from './useToggle';

export const useFinite = () => {
  const [start, setStart]     = useToggle( false );
  const [success, setSuccess] = useToggle( false );
  const [error, setError]     = useToggle( false );

  useEffect( () => {
    if (error) {
      if (start) {
        setStart();
      }
      if (success) {
        setSuccess();
      }
    }
  }, [error] );

  useEffect( () => {
    if (start) {
      if (success) {
        setSuccess();
      }
      if (error) {
        setError();
      }
    }
  }, [start] );

  useEffect( () => {
    if (success) {
      if (start) {
        setStart();
      }
      if (success) {
        setSuccess();
      }
    }
  }, [success] );

  const switchLoading = action => {
    switch (action) {
      case 'START':
        setStart();
      case 'SUCCESS':
        setSuccess();
      default:
        setError();
    }
  };
  return [start, success, error, switchLoading];
};