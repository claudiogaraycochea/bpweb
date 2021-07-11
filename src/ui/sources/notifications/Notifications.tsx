import React from 'react';
import './Notification.css';
// import Color from '../colors/Colors';

export const Notification = (props: any) => {

  const propType = (props.type) ? props.type : '';

  const data = {
    type: propType
  }

  return (
    <div className={`notification ${data.type}`}>
      {props.children}
    </div>
  );
}