import React from 'react';
import PropTypes from 'prop-types';
// import { ProgressBar } from 'react-bootstrap';
import { ProgressBar } from '../Packages/utlis/ReactBOOTSTRAP';


const CustomProgressBar = ({ now, color }) => {
  const progressStyle = {
    background: color,
    height: '100%',
    width: `${now}%`,
  };

  return (
    <ProgressBar>
      <div className="custom-progress" style={progressStyle} />
    </ProgressBar>
  );
};

CustomProgressBar.propTypes = {
  now: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default CustomProgressBar;
