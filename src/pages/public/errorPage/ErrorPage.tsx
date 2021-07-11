import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../ui/ui';

function ErrorPage() {
  return (
    <div className="home">
      <h1>
        ErrorPage
      </h1>
      <Link to='/login'>
        <Button>Login</Button>
      </Link>
    </div>
  );
}

export default ErrorPage;