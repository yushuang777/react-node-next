import { useEffect, useReducer } from 'react';
import { actions, initialState, reducer } from './reducer';
import { message } from 'antd';
import request from 'service/fetch';
interface Props {
  form: any;
}
export function useLoginHooks(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { form } = props;
  const getVcCode = async () => {
    const phone = await form.getFieldValue('phoneNumber');
    if (!phone) {
      message.warning('请先输入手机号');
    } else {
      request
        .post('/api/user/sendVerifyCode', { to: phone, template: 1 })
        .then((res: any) => {
          console.log(res);
          if (res?.code === '000000') {
            dispatch(actions.setIsShowCountTimeAction(true));
            console.log(res);
          } else {
            message.warn(res.msg);
          }
        });
    }
  };
  const onEnd = () => {
    dispatch(actions.setIsShowCountTimeAction(false));
  };
  return { state, getVcCode, onEnd };
}
