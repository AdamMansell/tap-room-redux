import React from "react";
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <li>{props.Name}</li>
      <li>{props.Price}</li>
      <li>{props.AlcoholContent}</li>
      <li>{props.PintsLeft}</li>
    </React.Fragment>
  );
}

Item.propTypes = {
  Name: PropTypes.string.isRequired,
  Price: PropTypes.string.isRequired,
  AlcoholContent: PropTypes.string.isRequired,
  PintsLeft: PropTypes.number.isRequired
};

export default Keg; 