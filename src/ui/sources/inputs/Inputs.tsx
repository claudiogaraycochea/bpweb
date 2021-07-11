import React from 'react';
import './Inputs.css';
// import Color from '../colors/Colors';

export const Input = (props: any) => {

  const propColor = (props.color) ? props.color : '';
  const propSize = (props.size) ? props.size : '';

  /*const data = {
    color: propColor,
    size: propSize
  }*/

  return (
    <div className='inp-wrapper'>
      {props.label ? (<div className='inp-label'>{props.label}</div>) : null }
      <input className={`inp ${propColor} ${propSize}`} />
      {props.error ? (<div className='inp-notification'>{props.error}</div>) : null}
    </div>
  );
}

export const InputCheck = (props: any) => {

  const propColor = (props.color) ? props.color : '';
  const propSize = (props.size) ? props.size : '';
  //console.log('>>>>>>>>Button: props: ', props.color);

  /*const data = {
    color: propColor,
    size: propSize
  }*/

  return (
    <div className='inp-check-wrapper'>
      <input type='checkbox' className={`inp ${propColor} ${propSize}`} />
      <div className='inp-label'>Label</div>
    </div>
  );
}

export const InputRadio = (props: any) => {

  const propColor = (props.color) ? props.color : '';
  const propSize = (props.size) ? props.size : '';
  // console.log('>>>>>>>>Button: props: ', props.color);

  /*const data = {
    color: propColor,
    size: propSize
  }*/

  return (
    <div className='inp-check-wrapper'>
      <input type='radio' className={`inp ${propColor} ${propSize}`} />
      <div className='inp-label'>Label</div>
    </div>
  );
}