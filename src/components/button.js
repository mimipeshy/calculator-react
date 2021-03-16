import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, handleClick }) => (
  <div>
    <button type="button" className="button" onClick={() => handleClick(value)}>
      {value}
    </button>
  </div>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
