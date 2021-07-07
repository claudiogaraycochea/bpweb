import React from 'react';
import './Button.css';
import Color from '../colors/Colors';

export const Button = (props: any) => {

  const propColor = (props.color) ? props.color : '';
  const propSize = (props.size) ? props.size : '';
  console.log('>>>>>>>>Button: props: ', props.color);

  const data = {
    color: propColor,
    size: propSize
  }

  return (
    <button className={`btn ${propColor} ${propSize}`}>
      Button text
    </button>
  );
}