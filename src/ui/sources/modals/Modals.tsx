import React from 'react';
import './Modals.css';
import Icon from '../icons/Icons';
import Color from '../colors/Colors';

export const Modal = (props: any) => {
  const { show, handleClose, component } = props;

  console.log('UI Modal');

  if (component) {
    return (
      <div className={`modal-wrapper ${show}`}>
        <div className='modal-box'>
          <div className='modal-header'>
            <button
              className='modal-btn-close'
              onClick={()=>props.handleClose()}
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

