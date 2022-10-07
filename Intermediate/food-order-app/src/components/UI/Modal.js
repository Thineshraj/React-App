import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const DropOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  const overlayId = document.getElementById('overlay');

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, overlayId)}
      {ReactDOM.createPortal(
        <DropOverlay>{props.children}</DropOverlay>,
        overlayId
      )}
    </Fragment>
  );
};

export default Modal;
