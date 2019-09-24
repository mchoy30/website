import React from 'react';
import {Link} from 'react-router-dom';

export default ({children}) =>{
  return(
    <div>
      <div>
        <h3><Link to='/'>Home</Link></h3>
        <h3><Link to='/resume'>Resume</Link></h3>
        <h3><Link to='/projects'>Projects</Link></h3>
      </div>
      {children}
    </div>
  )

}