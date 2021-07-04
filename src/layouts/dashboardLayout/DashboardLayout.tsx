import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SideMenu from '../../components/sideMenu/SideMenu';
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
    </div>
  );
}

export default DashboardLayout