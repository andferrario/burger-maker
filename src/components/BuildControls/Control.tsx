import React from 'react';
import '../../styles/Control.css';

interface ControlProps {
  label: string;
  added: () => void;
  removed: () => void;
  disabled: boolean;
}
export const Control: React.FC<ControlProps> = ({ label, added, removed, disabled }) => {
  return (
    <div className="control">
      <button type="button" className="less" onClick={removed} disabled={disabled}>
        Less
      </button>
      <div className="label">{label}</div>
      <button type="button" className="more" onClick={added}>
        More
      </button>
    </div>
  );
};
