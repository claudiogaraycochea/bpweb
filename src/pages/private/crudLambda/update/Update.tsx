import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Input, Button } from '../../../../ui/ui';
import * as API from '../../../../store/api/api';

function CrudLambdaUpdate(props: any) {
  const { email } = props.match.params;
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

  async function updateUser(data) {
    return await API.updateUser(data)
      .then((resp) => {
        if(resp) {
          setNotification({
            type: 'success',
            message: 'User updated successfully!'
          });
        }
      })
      .catch((error) => null);
  };

  async function getUser(email) {
    return await API.getUser(email)
      .then((resp) => {
        const { email, password } = resp;
        if(resp.email) {
          const user = {
            email,
            password
          }
          setFormData(user)       
        }
      })
      .catch((error) => null);
  };

  useEffect(()=>{
    if(formData.email==='') {
      console.log('useEffect: formData',formData);
      getUser(email);
    }
  })

  function handleForm(event) {
    event.preventDefault();
    const data = {
      email: formData.email,
      password: formData.password
    }
    updateUser(data);
  }



  return (
    <div>
      <Row>
        <h1>
          Crud Lambda Update
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
            <Input label='Email' name='email' value={formData.email} onChange={handleInputChange}/>
          </Row>
          <Row>
            <Input label='Password' name='password' value={formData.password} onChange={handleInputChange}/>
          </Row>
          <Row>
            <Button color='primary'>Save</Button>
          </Row>
        </form>        
      )}

    </div>
  )
}

export default CrudLambdaUpdate;