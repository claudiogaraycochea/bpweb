import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,RouteComponentProps } from 'react-router-dom';
import { Row, Col, Input, Button } from '../../../../ui/ui';
import { getOffice, setOfficeBooking } from '../../../../store/booking/BookingActions';

function CrudUpdate (props: any) {
  const { officeId } = props.match.params;
  const { officeSelected } = useSelector((state: any) => state.default.booking)
  const dispatch = useDispatch();

  useEffect(() => {
    if(officeSelected.id!== officeId)
      dispatch(getOffice(officeId))
  });

  function handleOfficeBooking() {
    dispatch(setOfficeBooking(officeId))
  }

  return (
    <div className="home">
      <Row>
        <h1>
          Booking
        </h1>
      </Row>
      <Row>
        <Col>Room:</Col>
        <Col>{officeSelected.room}</Col>
      </Row>
      <Row>
        <Col>Nombre:</Col>
        <Col>{officeSelected.name}</Col>
      </Row>
      <Row>
        <Col>Reserved: </Col>
        <Col>
          {officeSelected.available ? (
            <Button color='primary' onClick={()=>handleOfficeBooking()}>
              Booking now
            </Button>
            ) : (
              <div>Reserved</div>
            )
          }
          
        </Col>
      </Row>
      <Row>
        <Link to="/dashboard/crud">
          <Button>Go back</Button>
        </Link>
      </Row>
    </div>
  );
}

export default CrudUpdate;