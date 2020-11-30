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
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pintsLeft={keg.pintsLeft}
            id={keg.id}
            key={index}/>            
          )
        }        
      </ul>
    </React.Fragment>
  );
}

Keg.propTypes = {
  kegs: PropTypes.arrayOf(PropTypes.object).isRequired,
  onKegSelection: PropTypes.func
};

export default ListView; 