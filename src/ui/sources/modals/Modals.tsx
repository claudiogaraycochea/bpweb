import React, { useEffect, useState }from 'react';
import './Modals.css';
import Icon from '../icons/Icons';
import Color from '../colors/Colors';

export const Modal = (props: any) => {
  const { handleClose, component } = props;
  const [startAnimation, setStartAnimation] = useState('initial-animation');

  useEffect(() => {
    console.log('start');
    if(startAnimation==='initial-animation') {
      setStartAnimation('start-animation');
    }
  });

  function handleCloseModal() {
    console.log('end');
    // setStartAnimation('end-animation');
    props.handleClose();
  }

  if (component) {
    return (
      <div className={`modal-wrapper ${startAnimation}`}>
        <div className={`modal-box ${startAnimation}`}>
          <div className='modal-header'>
            <button
              className='modal-btn-close'
              onClick={() => handleCloseModal()}
            >
              <Icon icon='IconClose' color={Color.text} size='small' />
            </button>
          </div>
          <div className='modal-container'>
            {props.component}
          </div>
        </div>
      </div>
    );
  }
  return null;
};
/*
Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  show: false,
  children: <div />,
};*/

