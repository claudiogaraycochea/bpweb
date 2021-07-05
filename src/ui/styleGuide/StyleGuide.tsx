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
          <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Col>
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