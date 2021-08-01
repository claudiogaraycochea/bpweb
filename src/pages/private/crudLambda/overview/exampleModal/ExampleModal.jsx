import React from 'react';
import './ExampleModal.css';
import { Row, Col, Button } from '../../../../../ui/ui';
import * as API from '../../../../../store/api/api';

const ExampleModal = (props: any) => {
  const { handleClose, handleAccept, data } = props;
  const { user } = data;

  async function removeUser() {
    const { email } = user;
    return await API.removeUser(email)
      .then((resp) => {
        handleAccept()
      })
      .catch((error) => null);
  };

  return (
    <div>
      <div className='modal-content'>
        <div className={`example-modal`}>
          <Row>
            <h2>Remove modal</h2>
          </Row>
          <Row>
            <Col>
              Do you want remove {user.email}
            </Col>
          </Row>
        </div>
      </div>
      <div className='modal-bottom'>
        <Button onClick={()=>handleClose()}>
          Cancel
        </Button>
        <Button color='primary' onClick={()=>removeUser()}>
          Accept
        </Button>
      </div>
    </div>
  );
};

export default ExampleModal