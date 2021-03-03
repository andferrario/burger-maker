import React from 'react';
import '../../styles/Modal.css';

interface ModalProps {
  show: boolean;
}

export const Modal: React.FC<ModalProps> = ({ children, show }) => {
  return (
    <div className="modal" style={{ transform: show ? 'translateY(0)' : 'translateY(-100vh)', opacity: show ? 1 : 0 }}>
      {children}
    </div>
  );
};
