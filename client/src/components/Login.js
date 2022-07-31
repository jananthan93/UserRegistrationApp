import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    let navigate = useNavigate();
  const onFinish = (values) => {
    navigate('profile')
    console.log('Received values of form: ', values);
  };

  return (
    <Row className='container'>
      <Col md={6}>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        If You don't have Account, please <Link to={"register"}>register now!</Link>
      </Form.Item>
    </Form>
      </Col>
    </Row>
  );
};

export default Login;
