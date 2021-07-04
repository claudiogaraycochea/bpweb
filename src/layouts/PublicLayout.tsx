import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './PublicLayout.css';

function PublicLayout(props: any) {
  return (
    <div className="public-layout">
      <Header/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default PublicLayout