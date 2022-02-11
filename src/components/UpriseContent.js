import React from 'react';
import UpriseUpload from '../UpriseUpload';
import UpriseTable2 from './UpriseTable2';

const UpriseContent = () => {
  return( 
<div>
  <div className='content1'>
             <div className='songs'>
                Your Songs
             </div>
          <div>
               <UpriseUpload/>
      </div>
  </div> 
  <UpriseTable2/>
</div>)
};

export default UpriseContent;
