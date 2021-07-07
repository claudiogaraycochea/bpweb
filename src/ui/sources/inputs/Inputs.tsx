import React from 'react';
import './Inputs.css';
import Color from '../colors/Colors';

export const Input = (props: any) => {

  const propColor = (props.color) ? props.color : '';
  const propSize = (props.size) ? props.size : '';
  console.log('>>>>>>>>Button: props: ', props.color);

  const data = {
    color: propColor,
    size: propSize
  }

  return (
    <div>
      <div>Label</div>
      <input className={`inp ${propColor} ${propSize}`} />
      <div>Error message</div>
    </div>
  );
}