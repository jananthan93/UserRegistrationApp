import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/axios.service';
import { ACCESS_TOKEN, ADMIN } from '../utils/config';

function Login() {
  let navigate =useNavigate()

  const onFinish = (values) => {
    api('POST','auth/login','',values,'').then(res=>{
      const{token,user}=res.data.results
      localStorage.setItem(ACCESS_TOKEN,token)
      user.role===ADMIN ? navigate('users'):navigate('profile')
    }).catch(err=>console.log(err))
    console.log('Received values of form: ', values);
  };

  return (
    <Row className='container'>
      <Col md={6}>
        <Card>

    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
