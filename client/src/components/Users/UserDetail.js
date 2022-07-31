import {
    Button,
    Card,
    Col,
    Form,
    Input,
    Row,
    Select,
  } from 'antd';
  import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/axios.service';
import { ACCESS_TOKEN } from '../../utils/config';
import { parseJwt } from '../../utils/jwt';
import AuthLayout from '../AuthLayout';
  const { Option } = Select; 
  
  const UserDetail = ({isProfile}) => {
    let navigate=useNavigate()
    const [form] = Form.useForm();
    const [isEditable,setEditable]=useState(false)
    const[user,setUser]=useState({})
    let { id } = useParams();
    const getUser=(uId)=>{
      api('GET','users','token','',uId).then(res=>{
        setUser(res.data.results)
        form.setFieldsValue(res.data.results)
      }).catch(err=>console.log(err))
    }
    useEffect(()=>{console.log(isProfile)
        setEditable(!isProfile)
        if(isProfile){
          let token = localStorage.getItem(ACCESS_TOKEN)
          if(token){
            const userId = parseJwt(token).userId
            getUser(userId)
          }
        }else{
          getUser(id)
        }
    },[isProfile])

    const onFinish = (values) => {
      api('PUT','users','',values,values.id).then(res=>{
        navigate('/users')
      }).catch(err=>console.log(err))
      console.log('Received values of form: ', values);
    };
  return (
    <AuthLayout>
    <Row style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:50}}>
      <Col md={6}>
      <Card>
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
          name="id"
          hidden
        >
          <Input />
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
          htmlType="submit" 
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
      </Card>
      </Col>
      </Row>
    </AuthLayout>
      )
}
export default UserDetail;