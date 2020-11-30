import React from "react";
import Keg from './Keg'
import PropTypes from 'prop-types';

function ListView(props) {
  return (
    <React.Fragment>
      <ul>
        {
          props.kegs.map((keg, index) => 
          <Keg 
            whenKegClicked = {props.onKegSelection}
            whenBuyButtonIsClicked={props.handleBuyingPintsClick}
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pintsLeft={props.pintsLeft}
            id={keg.id}
            key={index}/>       
          )
        }        
      </ul>
    </React.Fragment>
  );
}

Keg.propTypes = {
  kegs: PropTypes.arrayOf(PropTypes.object),
  onKegSelection: PropTypes.func,
  pintsLeft: PropTypes.number.isRequired
};

export default ListView; 