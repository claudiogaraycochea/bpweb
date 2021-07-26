import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../ui/ui';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='logo-wrapper'>
        <i className='logo'></i>
      </div>
      <div className='menu'>
        <div className='item'>
          <Link to='/dashboard'>Dashboard</Link>
        </div>
        <div className='item'>
          <Link to='/logout'><Icon icon='IconLogout' size='small'/></Link>
        </div>
      </div>
    </div>
  );
}

export default Header