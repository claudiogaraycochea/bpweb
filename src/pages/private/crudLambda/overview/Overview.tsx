import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Modal } from '../../../../ui/ui';
import * as API from '../../../../store/api/api';
import ExampleModal from './exampleModal/ExampleModal';

function CrudLambdaOverview() {
  const [users, setUsers] = useState();
  const [componentModal, setComponentModal] = useState<any|undefined>(undefined);

  function openModalRemove(user) {
    const comp:any = <ExampleModal handleClose={handleClose} data={{user}} handleAccept={()=>handleAccept()}/>;
    setComponentModal(comp);
  }

  function handleClose() {
    setComponentModal()
  }

  async function getUser() {
    return await API.getUser()
      .then((resp) => setUsers(resp))
      .catch((error) => null);
  };

  useEffect(()=>{
    if(!users) {
      getUser();
    }
  })

  const handleAccept = () => {
    setComponentModal();
    getUser();
  }

  return (
    <div className="home">
      <Row>
        <Col>
          <h1>Crud Lambda</h1>
        </Col>
        <Col>
          <Link to="/dashboard/crud-lambda/create"><Button>Create</Button></Link>
        </Col>
      </Row>
      {(users) ? users.map((user) => {
        return (
          <Row key={user.id}>
            <Col size='10'>{user.id}</Col>
            <Col size='30'>{user.email}</Col>
            <Col size='50'>{user.pass}</Col>
            <Col size='10'>
              <Button onClick={()=>openModalRemove(user.id)}>Update</Button>
            </Col>
            <Col>
              <Button onClick={()=>openModalRemove(user)}>Delete</Button>
            </Col>
          </Row>
        )
      }): <div>Loading</div>}
      <Modal handleClose={handleClose} component={componentModal}/>
    </div>
  )
}

export default CrudLambdaOverview;