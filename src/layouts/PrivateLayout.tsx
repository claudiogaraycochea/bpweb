import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Container } from '../ui/ui';

function PrivateLayout(props: any) {
  return (
    <div className="public-layout">
      <Header />
      <Container>
        {props.children}
      </Container>
      <Footer />
    </div>
  );
}

export default PrivateLayout