import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../ui/ui';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <div className="error-page center">
      <div>
        <h1>
          ErrorPage
        </h1>
        <Link to='/'>
          <Button>Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;