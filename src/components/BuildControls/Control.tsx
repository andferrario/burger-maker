import React from 'react';
import '../../styles/Control.css';

export const Control: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="control">
      <div className="label">{label}</div>
      <button type="button" className="less">
        Less
      </button>
      <button type="button" className="more">
        More
      </button>
    </div>
  );
};
