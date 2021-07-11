import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Icon } from '../../../ui/ui';

function Header() {
  return (
    <div className='header'>
      <div className='title'>Title main page</div>
      <div className='menu'>
        <div className='item'>
          <Link to='/profile'><Icon icon='IconUser' size='small'/></Link>
        </div>
        <div className='item'>
          <Link to='/logout'><Icon icon='IconLogout' size='small'/></Link>
        </div>
      </div>
    </div>
  );
}

export default Header