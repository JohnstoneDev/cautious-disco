import { useEffect } from 'react';

const Modal = ({ displayModal , modalMessage, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    },3000)
  })
  
  return <h3 className="modal"> {modalMessage.toUpperCase()} </h3>
};

export default Modal;
