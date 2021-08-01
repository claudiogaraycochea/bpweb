import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Button } from '../../../../ui/ui';
import { useSelector, useDispatch } from 'react-redux';
import { searchOffices } from '../../../../store/booking/BookingActions';
import IOffice from '../../../../models/office';

function CrudOverview() {
  const { offices } = useSelector((state: any) => state.default.booking)
  const dispatch = useDispatch();
  const query = '';

  function handleSearchOffices(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value;
    dispatch(searchOffices(query));
  }

  return (
    <div className="home">
      <Row>
        <h1>
          Overview
        </h1>
      </Row>
      <Row>
        <Col>
          <Input
            name='query'
            type='text'
            placeholder='Find place'
            value={query}
            onChange={handleSearchOffices} 
          />
        </Col>
      </Row>
      {offices.map((office: IOffice) => {
        return (
          <Row key={office.id}>
            <Col size='50'>{office.name}</Col>
            <Col size='30'>{office.room}</Col>
            <Col size='20'>
              {office.available ? (
                <Link to={`/dashboard/crud/update/${office.id}`}>
                  <Button>Booking</Button>
                </Link>): (
                  <div>Reserved</div>
                )
              }
            </Col>
          </Row>
        )
      })}
    </div>
  );
}

export default CrudOverview;