import React from 'react';
import './components.css';
import { Layout, Menu } from 'antd';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
const { Sider } = Layout;


const UpriseSider = () => {
  return( 
      <>
         <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        theme='dark'
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Songs Management" className='submenu'>
          </SubMenu>
          <SubMenu key="sub2" icon={<CalendarOutlined />} title="Event Management" className='submenu'>
          </SubMenu>
          <SubMenu key="sub3" icon={<UserOutlined />} title='Profile' className='submenu'>
          </SubMenu>
        </Menu>
      </Sider>
      </>
  )
};

export default UpriseSider;
