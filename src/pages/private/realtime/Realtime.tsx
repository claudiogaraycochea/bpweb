import React from 'react';
import { Link } from 'react-router-dom';

function Realtime() {
  return (
    <div className="home">
      <h1>Realtime</h1>
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default Realtime;