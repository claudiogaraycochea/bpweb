import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';
import { Icon, Color } from '../../ui/ui';

function SideMenu() {
  const { device } = useWindowDimensions(getWindowDimensions());
  const [showSideMenu, setShowSideMenu] = useState(false);

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    let device = 'desktop';

    if (width < 768) {
      device = 'mobile';
    } else {
      device = 'desktop';
    }
    return {
      device
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }

  function changeSideMenu(visible: boolean) {
    setShowSideMenu(visible);
  }

  if ((device === 'mobile') && (!showSideMenu)) {
    return (
      <div className='side-menu-btn-open' onClick={() => changeSideMenu(true)}>
        <Icon icon='IconMenu' />
      </div>
    )
  }

  return (
    <div className={`side-menu ${device}`}>
      <div className='side-menu-btn-close' onClick={() => changeSideMenu(false)}><Icon icon='IconClose' color={Color.text} size='small' /></div>
      <div className='logo-wrapper'>
        <i className='logo'></i>
      </div>
      <div className='menu'>
        <div className='item'>
          <Link to='/realtime' className='menu-icon-link'>
            <div className='icon'><Icon icon='IconRealtime' size='small' /></div>
            <div className='content'>Realtime</div>
          </Link>
        </div>
        <div className='item'>
          <Link to='/style' className='menu-icon-link'>
            <div className='icon'><Icon icon='IconStyleGuide' size='small' /></div>
            <div className='content'>Style Guide</div>
          </Link>
        </div>
        <div className='item'>
          <Link to='/dashboard/crud' className='menu-icon-link'>
            <div className='icon'><Icon icon='IconRealtime' size='small' /></div>
            <div className='content'>CRUD</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideMenu