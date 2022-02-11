import React from 'react'
import { Checkbox } from 'antd';
import { Switch } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import icon5 from '../images/Album.svg';
import JsonData from './Data.json';

function onChange(e) {
	console.log(`checked = ${e.target.checked}`);
  }

function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr className='tr1'>
					<td>{<Checkbox onChange={onChange}></Checkbox>}</td>
					<td><img src={icon5} alt=''/></td>
					<td>{info.title}</td>
					<td>{info.Duration}</td>
                    <td>{info.collaborator}</td>
                    <td>{info.genre}</td>
                    <td>{info.uploadedOn}</td>
					<td>{<Switch defaultChecked size='small'/>}</td>
					<td><EditOutlined /><DeleteOutlined className='delete' /></td>
				</tr>
			)
		}
	)
	return(
		<div className='newt'>
			<table className="tr2">
					<tr className='tr3'>
					<th>{<Checkbox onChange={onChange}></Checkbox>}</th>
					<th>Album Art</th>
					<th>Title</th>
					<th>Duration</th>
					<th>Collaboration</th>
                    <th>Genre</th>
                    <th>Uploaded On</th>
					<th>Live</th>
					<th>Actions</th>
					</tr>
				
				<tbody>
					{DisplayData}
				</tbody>
			</table>
			
		</div>
	)
}
export default JsonDataDisplay;
