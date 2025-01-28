import { useEffect, useReducer } from 'react';
import { actions, initialState, reducer } from './reducer';

export function useLoginHooks() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getVcCode = () => {
    dispatch(actions.setIsShowCountTimeAction(true));
  };
  const onEnd = () => {
    dispatch(actions.setIsShowCountTimeAction(false));
  };
  return { state, getVcCode, onEnd };
}
