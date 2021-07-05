import React from 'react';
import './Texts.css';

export const H1 = (props: any) => {
  const { children } = props;

  return (
    <h1>
      {children}
    </h1>
  );
};
