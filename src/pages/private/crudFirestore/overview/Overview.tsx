import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Button } from '../../../../ui/ui';
import { useSelector, useDispatch } from 'react-redux';
import { searchOffices } from '../../../../store/booking/BookingActions';
import IOffice from '../../../../models/office';
import * as API from '../../../../store/api/api';

function CrudFirestoreOverview() {
  const [users, setUsers] = useState([]);

  API.getUser();

  return (
    <div className="home">
      <Row>
        <h1>
          Crud Firestore
        </h1>
      </Row>
    </div>
  )
}

export default CrudFirestoreOverview;