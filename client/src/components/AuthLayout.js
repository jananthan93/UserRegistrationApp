import { Button, Layout } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, ADMIN } from '../utils/config';
import { parseJwt } from '../utils/jwt';
const { Header, Content, Footer } = Layout;

export default function AuthLayout({children}) {
  let navigate =useNavigate()
  const token = localStorage.getItem(ACCESS_TOKEN)
  const {role} =parseJwt(token)
  const logout=()=>{
    localStorage.removeItem(ACCESS_TOKEN)
    navigate("/")
  }
  return (
    <Layout className="layout" style={{minHeight:'100vh'}}>
    <Header>
        {role ===ADMIN && <Link to={"/users"}>Users</Link>}
      <div style={{float:'right',color:"#fff"}}>
        <Link to={"/profile"}>Profile</Link>
        <Button style={{marginLeft:10}} onClick={()=>logout()}>Logout</Button>
      </div>
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >{children}
    {/* <div className="site-layout-content"></div> */}
     
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Design ©2022 Created by Jananthan
    </Footer>
  </Layout>
  )
}
