import { useReducer } from 'react';
import { actions, initialState, reducer } from './reducer';
import { useForm } from 'antd/lib/form/Form';

export function useNavbarHooks() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loginForm] = useForm();
  const handleGotoEdit = () => {
    console.log(1);
  };
  const handleGotoLogin = () => {
    dispatch(actions.setLoginModalAction(true));
  };
  const handleOk = () => {
    dispatch(actions.setLoginModalAction(false));
  };
  const handleCancel = () => {
    dispatch(actions.setLoginModalAction(false));
  };

  return {
    state,
    loginForm,
    handleGotoEdit,
    handleGotoLogin,
    handleOk,
    handleCancel,
  };
}
