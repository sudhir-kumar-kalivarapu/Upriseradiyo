import React, { useState } from 'react'
import 'antd/dist/antd.css';
import './components.css';
import './table.css';
import icon5 from '../images/Album.svg';
import icon6 from '../images/Edit.svg';
import icon7 from '../images/Bin.svg';
import { Table } from 'antd';

const columns = [
	{
	  title: 'AlbumArt',
	  dataIndex: 'albumart',
	  render: ()=> <img src={icon5} alt='' />
	},
	{
	  title: 'Title',
	  dataIndex: 'title',
	},
	{
	  title: 'Duration',
	  dataIndex: 'duration',
	},
	{
	  title:'Collaborators',
	  dataIndex:'collaborators'	
	},
	{
	  title:'Genre',
	  dataIndex:'genre'	
	},
	{
	  title:'Uploaded',
	  dataIndex:'uploaded'
	},
	{
	  title:'Live',
	  dataIndex:'live'
	},
	{
	  title:'Actions',
	  dataIndex:"actions",
	  render: () => (
	  <div>
		  <img src={icon6} alt=''/>
		  <img src={icon7} alt=''/>
	  </div>
	  ),
	}
  ];
  

  const data = [
	{
	  key: '1',
	  albumart: 'John Brown',
	  title: 'bear with me',
	  duration: '5:23',
	  collaborators:'sudhir',
	  genre:'jazz',
	  uploaded:'jan 10',
	  action:'no',
	  live:'yes'
	},
	{
	  key: '2',
	  albumart: 'John Brown',
	  title: 'unknown',
	  duration: '5:23',
	  collaborators:'ariana',
	  genre:'rock',
	  uploaded:'jan 10',
	  action:'no',
	  live:'yes',
	}
	
  ];

  const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
	  console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
};


const UpriseTable2 = () => {
	const [selectionType] = useState('checkbox');
  return (
	<div>
		<Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
	</div>
  );
};

export default UpriseTable2