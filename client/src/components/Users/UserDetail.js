import {
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Select,
  } from 'antd';
  import React, { useEffect, useState } from 'react';
  const { Option } = Select; 
  
  const UserDetail = ({isEdit}) => {
    const [form] = Form.useForm();
    const [isEditable,setEditable]=useState(false)
    useEffect(()=>{console.log(isEdit)
        setEditable(isEdit)
    },[isEdit])
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
  return (
    <Row className='container'>
      <Col md={6}>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
            prefix: '86',
        }}
        layout="vertical"
        scrollToFirstError
      >
        <Form.Item
        label="Email"
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
          <Input placeholder="Email" readOnly/>
        </Form.Item>
  
  
        <Form.Item
          name="userName"
          label="User Name"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="User Name" disabled={!isEditable}/>
        </Form.Item>
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: 'Please input your firstName!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="First Name" disabled={!isEditable}/>
        </Form.Item>
        <Form.Item
         label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: 'Please input your lastName!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Last Name" disabled={!isEditable}/>
        </Form.Item>
        <Form.Item
         label="Phone Number"
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
            disabled={!isEditable}
          />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
        >
          <Select placeholder="select your gender" disabled={!isEditable}>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
       
        {isEditable&&<Form.Item >
          <Button type="primary" 
        //   htmlType="submit" 
        onClick={()=>setEditable(!isEditable)}
          >
            Update
          </Button>
        </Form.Item>}
        {!isEditable&&
            <>
        {/* <Button type="primary"   onClick={()=>setEditable(!isEditable)}>
            Back
        </Button> */}
        <Button type="primary"  onClick={()=>setEditable(!isEditable)}>
            Edit
        </Button>
        </>
            
        }
      </Form>
      </Col>
      </Row>
      )
}
export default UserDetail;