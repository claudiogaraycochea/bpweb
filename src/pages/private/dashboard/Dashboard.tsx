import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="home">
      <h1>Dashboard</h1>
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default Dashboard;