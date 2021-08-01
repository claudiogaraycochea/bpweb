import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Modal } from '../../../../ui/ui';
import * as API from '../../../../store/api/api';
import RemoveUserModal from './removeUserModal/RemoveUserModal';

function CrudLambdaOverview() {
  const [users, setUsers] = useState();
  const [componentModal, setComponentModal] = useState<any|undefined>(undefined);

  function openModalRemove(user) {
    const comp:any = <RemoveUserModal handleClose={handleClose} data={{user}} handleAccept={()=>handleAccept()}/>;
    setComponentModal(comp);
  }

  function handleClose() {
    setComponentModal()
  }

  async function getUsers() {
    return await API.getUsers()
      .then((resp) => setUsers(resp))
      .catch((error) => null);
  };

  useEffect(()=>{
    if(!users) {
      getUsers();
    }
  })

  const handleAccept = () => {
    setComponentModal();
    getUser();
  }

  return (
    <div>
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
            <Col size='50'>{user.password}</Col>
            <Col size='10'>
              <Link to={`/dashboard/crud-lambda/update/${user.email}`}>
                <Button>Update</Button>
              </Link>
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