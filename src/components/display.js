import React from 'react';
import PropTypes from 'prop-types';

const Display = props => (
  <div className="app-display">
    <div>
      {props.result}
    </div>
  </div>

);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
export default Display;
