import React from "react";
import Keg from './Keg'
import PropTypes from 'prop-types';


function ListView(props) {
  return (
    <React.Fragment>
      <ul>
        {props.Kegs.map((keg, index) => 
        <Keg Name={keg.Name}
          Price={keg.Price}
          AlcoholContent={keg.AlcoholContent}
          PintsLeft={keg.PintsLeft}
          key={index}/>
        )}
      </ul>
    </React.Fragment>
  );
}


Keg.propTypes = {
  kegs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListView; 