import { Button, Checkbox, Col, Form, Input, Modal, Row } from 'antd';
import React from 'react';
import { useLoginHooks } from './hooks';
import CountTime from 'components/CountTime';
interface Props {
  handleOk: () => void;
  handleCancel: () => void;
  loginModal: boolean;
  form: any;
}

function index(props: Props) {
  const { handleOk, handleCancel, loginModal, form } = props;
  const { state, getVcCode, onEnd } = useLoginHooks(props);
  const { countTime, isShowCountTime } = state;
  return (
    <div>
      <Modal
        title="登录弹窗"
        onOk={handleOk}
        onCancel={handleCancel}
        open={loginModal}
        cancelText={'关闭'}
        okText={'登录'}
      >
        <Form
          form={form}
          autoComplete="off"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="手机号"
            name="phoneNumber"
            rules={[{ required: true, message: '请输入手机号！' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="验证码">
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="vcCode"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码！',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                {isShowCountTime ? (
                  <CountTime time={countTime} onEnd={onEnd} />
                ) : (
                  <Button onClick={getVcCode}>获取验证码</Button>
                )}
              </Col>
            </Row>
          </Form.Item>
        </Form>
        <span style={{ color: 'blue', cursor: 'pointer' }}>使用Github登录</span>
      </Modal>
    </div>
  );
}

export default index;
