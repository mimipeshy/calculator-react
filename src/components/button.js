import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName }) => (
  <div>
    <button type="button">
      {buttonName}
    </button>
  </div>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
