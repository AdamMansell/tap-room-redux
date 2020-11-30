import React from "react";
import PropTypes from 'prop-types';

function Keg(props) {

  let PintsLeft = props.PintsLeft;
  if(parseInt(PintsLeft) === 0) {
    let quantity = "Keg's Empty";
  }

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <li>Name: {props.Name}</li>
        <li>Brand: {props.Brand}</li>
        <li>Price: ${props.Price}</li>
        <li>Content: {props.AlcoholContent}%</li>
        <li>PintsLeft: {PintsLeft}</li>
        <hr></hr>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  Name: PropTypes.string.isRequired,
  Price: PropTypes.string.isRequired,
  AlcoholContent: PropTypes.string.isRequired,
  PintsLeft: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg; 