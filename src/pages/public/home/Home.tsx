import React from 'react';
import { Row, Box, Button } from '../../../ui/ui';
import { facebookProvider, googleProvider } from '../../../config/authMethods';
import socialMediaAuth from '../../../services/auth';

function Home() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  }

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
      <Box type="success">
          <h2>Create account</h2>
          <Button color='primary' onClick={()=>handleOnClick(facebookProvider)}>Facebook</Button>
          <Button color='primary' onClick={()=>handleOnClick(googleProvider)}>Google</Button>
      </Box>
    </div>
  );
}

export default Home;