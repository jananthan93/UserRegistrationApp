import {
    Button,
    Card,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Select,
  } from 'antd';
  import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/axios.service';
  const { Option } = Select; 
  
  const Register = () => {
    let navigate =useNavigate()
    const [form] = Form.useForm();
  
    const onFinish = (values) => {
      api('POST','auth/register','',values,'').then(res=>{
        navigate('/')
      }).catch(err=>console.log(err))
      console.log('Received values of form: ', values);
    };
    return (
        <Row className='container'>
      <Col md={6}>
<Card>

      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder="Email"/>
        </Form.Item>
  
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password  placeholder="Password"/>
        </Form.Item>
  
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
  
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password"/>
        </Form.Item>
  
        <Form.Item
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please input your firstName!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="First Name"/>
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: 'Please input your lastName!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Last Name"/>
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            style={{
              width: '100%',
            }}
            placeholder="Phone Number"
          />
        </Form.Item>
  
       
  
        <Form.Item
          name="gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
        >
          <Checkbox>
            I have read the <Link to={"/"}>agreement</Link>
          </Checkbox>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
          You have an Account, please <Link to={"/"}>login now!</Link>
        </Form.Item>
      </Form>
</Card>
      </Col>
      </Row>
    );
  };
  
  export default Register;