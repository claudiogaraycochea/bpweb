import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';

function SideMenu() {
  return (
    <div className='side-menu'>
      <div className='logo-wrapper'>
        <i className='logo'></i>
      </div>
      <div className='menu'>
        <div className='item'>
          <Link to='/'>Home</Link>
        </div>
        <div className='item'>
          <Link to='/realtime'>Realtime</Link>
        </div>
        <div className='item'>
          <Link to='/logout'>Logout</Link>
        </div>
      </div>
    </div>
  );
}

export default SideMenu