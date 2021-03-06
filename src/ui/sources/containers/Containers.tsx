import React from 'react';
import './Container.css';

export const Container = (props: any) => {
  const { children } = props;
  const propContainer = (props.container) ? props.container : 'container';

  return (
    <div
      className={propContainer}
    >
      {children}
    </div>
  );
};

export const Section = (props: any) => {
    const {
      size,
      className,
      backgroundImage,
      alignItems,
      justifyContent,
      children,
    } = props;
    const styles = {
      height: (size) ? `${size}%` : null,
      backgroundImage: `url(${backgroundImage})`,
      alignItems: (alignItems) ? `${alignItems}` : null,
      flex: 1,
      justifyContent: (justifyContent) ? `${justifyContent}` : null,
    }
    return (
      <div
        className={`section ${className}`}
        //style={styles}
      >
        {children}
      </div>
    );
  };
  
  export const Row = (props: any) => {
    const { children } = props;
    return (
      <div
        className='row'
      >
        {props.children}
      </div>
    );
  };
  
  export const Col = (props: any) => {
    const {
      size,
      backgroundImage,
      alignItems,
      justifyContent,
      children,
    } = props;
    const styles = {
      height: (size) ? `${size}%` : null,
      backgroundImage: `url(${backgroundImage})`,
      alignItems: (alignItems) ? `${alignItems}` : null,
      flex: 1,
      justifyContent: (justifyContent) ? `${justifyContent}` : null,
    }
    return (
      <div
        className='col'
        //style={styles}
      >
        {children}
      </div>
    );
  };
  
  export const Box = (props: any) => {
    const {
      width,
      height,
      className,
      backgroundImage,
      alignItems,
      justifyContent,
      children,
    } = props;
    /*const styles = {
      width: (width) ? `${width}%` : '',
      height: (height) ? `calc(${height}% - 0px)` : null,
      backgroundImage: `url(${backgroundImage})`,
      alignItems: (alignItems) ? `${alignItems}` : null,
      justifyContent: (justifyContent) ? `${justifyContent}` : null,
    }*/
    return (
      <div
        className={`box ${className}`}
        // style={styles}
      >
        {children}
      </div>
    );
};