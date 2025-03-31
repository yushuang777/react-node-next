import { useReducer } from 'react';
import { actions, initialState, reducer } from './reducer';
import { useForm } from 'antd/lib/form/Form';
import request from 'service/fetch';
import { message } from 'antd';

export function useNavbarHooks() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loginForm] = useForm();
  const clear = () => {
    loginForm.resetFields();
  };
  const handleGotoEdit = () => {
    console.log(1);
  };
  const handleGotoLogin = () => {
    dispatch(actions.setLoginModalAction(true));
  };
  const handleOk = async () => {
    const form = await loginForm.validateFields();
    request.post('/api/user/login', { ...form }).then((res: any) => {
      if (res?.code === 0) {
        console.log(res);
      } else {
        message.warn(res.msg);
      }
    });
    clear();
    dispatch(actions.setLoginModalAction(false));
  };
  const handleCancel = () => {
    clear();
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
