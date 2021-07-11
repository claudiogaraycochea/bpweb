import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button, Row, Col } from 'react-bootstrap';
import { Container, Section, Row, Col, Box, Icon, Color, Button, Notification, Input, InputCheck, InputRadio, Modal } from '../ui';
import ExampleModal from './exampleModal/ExampleModal';

type IComponent = React.FC<{}>;

function StyleGuide() {
  const [componentModal, setComponentModal] = useState<any|undefined>(undefined);

  function openModalEditPassword() {
    console.log('Open Modal');
    const comp:any = <ExampleModal handleClose={handleClose}/>;
    setComponentModal(comp)
  }

  function handleClose() {
    setComponentModal()
  }

  return (
    <div>
      <Section>
        <h1>Style Guide</h1>
        <Row>
          <Col>Diseno experimental basado en UX neuroscience, la misma se enfoca a reducir la carga cerebral con experiencias previas del usuario. Entre los puntos se encuentran repeticion de ubicacion de elementos principales, botones curvos distencion, colores calidos, y menu simple y basico de acuerdo a cada necesidad.</Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <h2>Containers</h2>
        </Row>
        <Row>
          <Col size='20'><Box type="success">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</Box></Col>
          <Col><Box type="success">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</Box></Col>
        </Row>
        <Row>
          <Col><Box type="success">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</Box></Col>
        </Row>
        <Row>
          <Col><Box type="success">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</Box></Col>
          <Col size='20'><Box type="success">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</Box></Col>
          <Col><Box type="success">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</Box></Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col><h1>h1 - Heading 1</h1></Col>
          <Col><h2>h2 - Heading 2</h2></Col>
          <Col><h3>h3 - Heading 3</h3></Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <h2>Buttons</h2>
        </Row>
        <Row>
          <Link to='/login'>
            <Button size='small'>Primary</Button>
          </Link>
          <Link to='/login'>
            <Button color='primary' size='small'>Small</Button>
          </Link>
          <Link to='/login'>
            <Button>Normal</Button>
          </Link>
          <Link to='/login'>
            <Button color='primary'>Normal Primary</Button>
          </Link>
          <Link to='/login'>
            <Button size='large'>Large</Button>
          </Link>
          <Link to='/login'>
            <Button color='primary' size='large'>Large</Button>
          </Link>
        </Row>
      </Section>
      
      <Section>
        <Row>
          <h2>Inputs</h2>
        </Row>
        <Row>
          <Col>
            <Input size='small' label='Firstname' error='Error message'/>
          </Col>
          <Col>
            <Input label='Firstname' error='Error message'/>
          </Col>
          <Col>
            <Input size='large' label='Firstname' error='Error message'/>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputCheck />
          </Col>
          <Col>
            <InputRadio />
          </Col>
          <Col>
            <InputRadio />
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <h2>Icons</h2>
        </Row>
        <Row>
          <Col>
            <Icon icon='IconUser' color={Color.primary} size='small' />
            <Icon icon='IconUser' color={Color.primary} size='medium' />
            <Icon icon='IconUser' color={Color.primary} size='large' />
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <h2>Notifications</h2>
        </Row>
        <Row>
          <Notification type="success">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</Notification>
        </Row>
        <Row>
          <Notification type="alert">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</Notification>
        </Row>
        <Row>
          <Notification type="danger">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</Notification>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col>
            <h2>Modals</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button size='large' onClick={() => openModalEditPassword()}>Open Modal</Button>
          </Col>
        </Row>
      </Section>
      <Modal handleClose={handleClose} component={componentModal}/>
    </div>
  );
}

export default StyleGuide;