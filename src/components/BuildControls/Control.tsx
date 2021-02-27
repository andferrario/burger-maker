import React from 'react';
import '../../styles/Control.css';

interface ControlProps {
  label: string;
  added: () => void;
}
export const Control: React.FC<ControlProps> = ({ label, added }) => {
  return (
    <div className="control">
      <button type="button" className="less">
        Less
      </button>
      <div className="label">{label}</div>
      <button type="button" className="more" onClick={added}>
        More
      </button>
    </div>
  );
};
