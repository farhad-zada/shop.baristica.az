import React from 'react';

const ProgressBar = ({ percentage }) => {
  const containerStyles = {
    height: '10px',
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: '50px',
    overflow: 'hidden',
  };

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: '#468B8C',
    transition: 'width 0.5s ease-in-out',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
