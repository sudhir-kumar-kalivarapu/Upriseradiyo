import React from 'react';
import './components.css';
import { Avatar } from 'antd';
import icon1 from '../images/uprise1.png';
import icon2 from '../images/uprise2.png';
import icon3 from '../images/Vector.svg';
import icon4 from '../images/Setting.svg'
// import { SearchOutlined } from '@ant-design/icons/lib/icons';


const UpriseHeader = () => {
  return (
  <div className='div-1'>
    <div className='title'>
        <Avatar src={icon1} className='icon1'/>
        <img src={icon2} alt='' className='icon2'/>
    </div>
   <div className='div-2'>
     <div className='div-3'>
      <img src={icon3} alt=""/>
      </div>
      <div className='div-4'>
        <img src={icon4} alt=''/>
        <p className='bob'>BOB MARLEY</p>
      </div>
   </div>
  </div>
  )
};
export default UpriseHeader;


