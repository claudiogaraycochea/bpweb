import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';
import { Icon, Color } from '../../ui/ui';

function SideMenu() {
  return (
    <div className='side-menu'>
      <div className='logo-wrapper'>
        <i className='logo'></i>
      </div>
      <div className='menu'>
        <div className='item'>
          <Link to='/' className='menu-icon-link'>
            <div className='icon'><Icon icon='IconUser' size='small'/></div> 
            <div className='content'>Home</div>
          </Link>
        </div>
        <div className='item'>
          <Link to='/realtime' className='menu-icon-link'>
            <div className='icon'><Icon icon='IconUser' size='small'/></div> 
            <div className='content'>Realtime</div>
          </Link>
        </div>
        <div className='item'>
          <Link to='/logout' className='menu-icon-link'>
            <div className='icon'><Icon icon='IconUser' size='small'/></div> 
            <div className='content'>Style Guide</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideMenu