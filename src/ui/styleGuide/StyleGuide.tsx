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
          <Col><Icon icon='IconUser' color={Color.primary} size='medium'/><Icon icon='IconLogout' color={Color.primary} size='medium'/></Col>
          <Col><Icon icon='IconUser' color={Color.primary} size='medium'/><Icon icon='IconLogout' color={Color.primary} size='medium'/></Col>
        </Row>
      </Section>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>

      

      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </div>
  );
}

export default StyleGuide;