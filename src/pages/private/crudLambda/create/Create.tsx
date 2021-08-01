import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Input, Button } from '../../../../ui/ui';
import * as API from '../../../../store/api/api';

function CrudLambdaCreate() {
  const [notification, setNotification] = useState();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  }

  async function createUser(data) {
    return await API.createUser(data)
      .then((resp) => {
        if(resp) {
          setNotification({
            type: 'success',
            message: 'User created successfully!'
          });
        }
      })
      .catch((error) => null);
  };

  useEffect(()=>{
    console.log('formData: ',formData);
  })

  function handleForm(event) {
    event.preventDefault();
    const data = {
      email: formData.email,
      password: formData.password
    }
    createUser(data);
  }

  return (
    <div>
      <Row>
        <h1>
          Crud Lambda Create
        </h1>
      </Row>
      {notification && notification.type ? (
        <div>
          <Row><div>{notification.message}</div></Row>
          <Row><Link to='/dashboard/crud-lambda/'>Go back</Link></Row>
        </div>
        ) : (
        <form onSubmit={handleForm}>
          <Row>
            <Input label='Email' name='email' onChange={handleInputChange}/>
          </Row>
          <Row>
            <Input label='Password' name='password' onChange={handleInputChange}/>
          </Row>
          <Row>
            <Button color='primary'>Save</Button>
          </Row>
        </form>        
      )}

    </div>
  )
}

export default CrudLambdaCreate;