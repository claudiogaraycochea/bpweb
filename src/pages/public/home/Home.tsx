import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Row, } from '../../../ui/ui';

function Home() {
  return (
    <div className="home">
      <Row>
        <h1>
          Home
        </h1>
      </Row>
      <Row>
        <h1>
          WebandTV - Micropagos e interactividad para canales de tv y radios
        </h1>
      </Row>
      <Row>
        <h1>
          NextPlay Comunicacion - todo para la comunicacion online
        </h1>
      </Row>
      <Row>
        <h1>
          ShareSmartTV - Touchpad desde telefono movil
        </h1>
      </Row>
      <Row>
        <h1>
          Trash Tracker - Notificar a las personas donde recoger la basura.
        </h1>
      </Row>

      <Link to='/login'>
        <Button>Login</Button>
      </Link>
    </div>
  );
}

export default Home;