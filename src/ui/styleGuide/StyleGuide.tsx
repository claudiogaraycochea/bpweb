import React from 'react';
import { Link } from 'react-router-dom';
// import { Button, Row, Col } from 'react-bootstrap';
import { Container, Section, Row, Col, Icon, Color } from '../ui';

function StyleGuide() {
  return (
    <div>
      <h1>Style Guide</h1>
      <Section>
        <Row>
          <Col>Diseno experimental basado en UX neuroscience, la misma se enfoca a reducir la carga cerebral con experiencias previas del usuario. Entre los puntos se encuentran repeticion de ubicacion de elementos principales, botones curvos distencion, colores calidos, y menu simple y basico de acuerdo a cada necesidad.</Col>
        </Row>
        <Row>
          <Col>Aprende</Col>
          <Col>Asimila</Col>
          <Col>Aplica automaticamente</Col>
        </Row>
        <Row>
          <Col><Icon icon='IconUser' color={Color.primary} size='medium'/> IconUser</Col>
          <Col><Icon icon='IconLogout' color={Color.primary} size='medium'/> IconLogout</Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </Row>
      </Section>
    </div>
  );
}

export default StyleGuide;