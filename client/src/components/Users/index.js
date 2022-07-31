import { Col, Row, Space, Table } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
const users =[
    {
        id:1,
        email: "hfhf@ffhg.gdfh",
        firstName: "hhfhf",
        gender: "male",
        lastName: "jhfffjf",
        phone: "065746454474",
        userName: "ttttada"
    },
    {
        id:2,
        email: "hfhf@ffhg.gdfh",
        firstName: "ssggf",
        gender: "male",
        lastName: "llkl",
        phone: "065746454474",
        userName: "sddsf"
    }
]
export default function Users() {
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
        title: 'User Name',
        dataIndex: 'userName',
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
      <Row className='usertable-container'>
        <Col md={12}>
        <h2>Showing All Users</h2>
          <Table  columns={columns} dataSource={data} />
        </Col>
      </Row>
      )
}
