import React from 'react';
import './App.css'
import UpriseHeader from './components/UpriseHeader';
import UpriseSider from './components/UpriseSider';
import UpriseContent from './components/UpriseContent';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
const App = () => {
  return (
    <Layout>
    <Header className='header'>
      <UpriseHeader/>
    </Header>
    <Layout>
      <Sider className='sider'><UpriseSider/></Sider>
      <Content className='content'><UpriseContent/></Content>
    </Layout>
  </Layout>
    );
};
export default App;
