import { Card, Col, Row, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { api } from '../../services/axios.service';
import AuthLayout from '../AuthLayout';

export default function Users() {
  const [users,setUsers]=useState([]);
  const getUsers=()=>{
    api('GET','users','token','','')
    .then(res=>setUsers(res.data.results))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    getUsers()
  },[])
    const columns = [
        {
          title: 'First Name',
          dataIndex: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Space size="middle">
                <Link to={`/users/${record.id}`}>Edit</Link>
              </Space>
            ),
          },
      ];
      const data = users;
     
      return (
        <AuthLayout>
          <Row className='usertable-container'>
            <Col md={12}>
            <Card>
            <h2>Showing All Users</h2>
              <Table  columns={columns} dataSource={data}  pagination={false}/>
            </Card>
            </Col>
          </Row>
        </AuthLayout>
      )
}
