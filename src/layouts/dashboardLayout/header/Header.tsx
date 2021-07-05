import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='title'>Title main page</div>
      <div className='menu'>
        <div className='item'>
          <Link to='/'>Home</Link>
        </div>
        <div className='item'>
          <Link to='/dashboard'>Dashboard</Link>
        </div>
        <div className='item'>
          <Link to='/realtime'>Realtime</Link>
        </div>
        <div className='item'>
          <Link to='/style'>Style Guide</Link>
        </div>
        <div className='item'>
          <Link to='/logout'>Logout</Link>
        </div>
      </div>
    </div>
  );
}

export default Header