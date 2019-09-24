import React from 'react';
import Resume from '../assests/Resume.pdf';
import { Document } from 'react-pdf'
export default () =>{

  return(
    <div>
      <Document
       file={{Resume}}
       onLoadError={console.error}
       >

      </Document>
    </div>
  )
}
