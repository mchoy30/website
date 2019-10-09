import React ,{useContext}from 'react';
import ScreenContext from '../Context/ScreenContext';
import {NavLink} from 'react-router-dom';
import Hover from  '../NavLink.css';
const Header = () => {
  const style = {
    margin:'20px',
  };
  const screenSize = useContext(ScreenContext);
  return(
    <div style={{marginBottom:'0px', postition:'fixed'}}>

      <div style={{display:'flex', flexDirection:'row',justifyContent: 'flex-end',backgroundColor: screenSize.medium ? '#0288D1' : '#0288D1'}}>
        <div style={{display:'flex',color:'#fff',alignItems:screenSize.large ? 'flex-end' :'center',justifyContent: 'center', fontFamily:'Satisfy, cursive',width:'50%',position:'relative', right:screenSize.large ? '': '166px',}}>
          <NavLink to='/' style={{fontSize:'35px',display:'flex',fontFamily:'Satisfy, cursive',}}  > {screenSize.large ? 'Mchoy': 'Mackenzie Choy' } </NavLink>
        </div>

        <h3 className="links" style={style}><NavLink activeStyle={Hover} to='/'>About</NavLink></h3>
        <h3 className="links" style={style}><NavLink activeStyle={Hover} to='/projects'>The List</NavLink></h3>
        <h3 className="links" style={style}><NavLink activeStyle={Hover} to='/resume'>Resume</NavLink></h3>
      </div>
    </div>
  )

}

export default Header;