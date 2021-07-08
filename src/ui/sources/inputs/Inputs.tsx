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
    <div className='inp-wrapper'>
      <div className='inp-label'>Label</div>
      <input className={`inp ${propColor} ${propSize}`} />
      <div className='inp-notification'>Error message</div>
    </div>
  );
}