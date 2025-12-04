import React from 'react';

const Box = ({ children }) => {
  return (
    <div style={{ border: '1px solid #000', padding: '10px', margin: '10px' }}>
      {children}
    </div>
  );
};

export default Box;
