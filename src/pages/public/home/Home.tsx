import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Icon, Color } from '../../../ui/ui';

function Home() {
  return (
    <div className="home">
      <h1>
        <Icon icon='IconUser' color={Color.primary} size='medium'/> 
        <Icon icon='IconLogout' color={Color.primary} size='medium'/> 
        Home
      </h1>
      <Link to='/login'>
        <Button>Login</Button>
      </Link>
    </div>
  );
}

export default Home;