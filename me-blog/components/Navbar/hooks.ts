import { useReducer } from 'react';
import { initialState, reducer } from './reducer';

export function useNavbarHooks() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleGotoEdit = () => {
    console.log(1);
  };
  return { state, handleGotoEdit };
}
