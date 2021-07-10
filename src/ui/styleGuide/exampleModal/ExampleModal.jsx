import React from 'react';
import './ExampleModal.css';
import { Row, Col, Button } from '../../ui';

const ExampleModal = (props: any) => {
  const { show, handleClose, component } = props;

  return (
    <div>
      <div className='modal-content'>
        <div className={`example-modal`}>
          <Row>
            <h2>Example modal</h2>
          </Row>
          <Row>
            <Col>
              Testing ExampleModal Component
            </Col>
          </Row>
        </div>
      </div>
      <div className='modal-bottom'>
        <Button onClick={()=>props.handleClose()}>
          Cancel
        </Button>
        <Button color='primary'>
          Accept
        </Button>
      </div>
    </div>
  );
};

export default ExampleModal