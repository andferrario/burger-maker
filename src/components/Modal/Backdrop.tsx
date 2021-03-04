import React from 'react';
import '../../styles/Modal.css';

interface BackdropProps {
  show: boolean;
  clicked: () => void;
}

export const Backdrop: React.FC<BackdropProps> = ({ show, clicked }) =>
  show ? <div className="backdrop" onClick={clicked} /> : null;
