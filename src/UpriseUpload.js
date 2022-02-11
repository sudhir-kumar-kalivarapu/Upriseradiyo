import React from 'react';
import { Upload, message, Button } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';


const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

const UpriseUpload = () => {
  return (
    <Upload {...props}>
        <Button icon={<CloudUploadOutlined />} className='uploadbutton'>Upload new song</Button>
    </Upload>
  )
};

export default UpriseUpload;
