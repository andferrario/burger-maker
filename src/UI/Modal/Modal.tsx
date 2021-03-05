import React from 'react';
import '../../styles/Modal.css';
import { Backdrop } from '../Backdrop/Backdrop';

interface ModalProps {
  show: boolean;
  clicked: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, show, clicked }) => (
  <>
    <Backdrop show={show} clicked={clicked} />
    <div className="modal" style={{ transform: show ? 'translateY(0)' : 'translateY(-100vh)', opacity: show ? 1 : 0 }}>
      {children}
    </div>
  </>
);
