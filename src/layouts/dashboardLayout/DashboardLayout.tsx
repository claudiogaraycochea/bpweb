import React from 'react';
import Header from './header/Header';
import Footer from '../../components/footer/Footer';
import SideMenu from '../../components/sideMenu/SideMenu';
import NextPlayLink from '../../components/nextPlayLink/NextPlayLink';
import { Container } from '../../ui/ui';
import './DashboardLayout.css';

function DashboardLayout(props: any) {
  return (
    <div className="dashboard-layout">
      <SideMenu />
      <div className='main-wrapper'>
        <Header />
        <Container container='container-fluid'>
          {props.children}
        </Container>
        <Footer />
      </div>
      <NextPlayLink />
    </div>
  );
}

export default DashboardLayout