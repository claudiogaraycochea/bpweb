import React, { useEffect, useState } from 'react';
import IPage from '../../../models/page';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

const About: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
  const [message, setMessage] = useState < string > ('');

  useEffect(() => {
    let number = props.match.params.number;

    if (number) {
      setMessage(`The Number is ${number}`);
    }
    else {
      setMessage(`No number provided!`);
    }
  }, [props])

  return (
    <div className="about">
      About {message}
      <Link to='/'>Go to home</Link>
    </div>
  );
}

export default withRouter(About);