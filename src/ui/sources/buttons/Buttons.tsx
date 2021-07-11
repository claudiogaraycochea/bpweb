import React from 'react';
import './Button.css';
// import Color from '../colors/Colors';

export const Button = (props: any) => {
  const { children } = props;
  const propColor = (props.color) ? props.color : '';
  const propSize = (props.size) ? props.size : '';

  /*const data = {
    color: propColor,
    size: propSize
  }*/

  return (
    <button className={`btn ${propColor} ${propSize}`} onClick={props.onClick}>
      {children}
    </button>
  );
}