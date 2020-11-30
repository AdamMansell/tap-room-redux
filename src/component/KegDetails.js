import React from "react";
import PropTypes from "prop-types";

function KegDetails(props){
  const { keg } = props;
  let PintsLeft = props.PintsLeft;
  if(parseInt(PintsLeft) === 0) {
    let quantity = "Keg's Empty";
  }

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.location} - {keg.names}</h3>

      {/* <button onClick = {()=> handleChangeItemQuantityButton(keg, true, 1) }>Buy</button> reduce quantity */}
      {/* <button onClick = {()=> handleChangeItemQuantityButton(keg, false, 10)  }>Stock</button> increase quantity props.onStockClick */}
      
      {/* <button onClick = { props.onClickingEdit }>Update Item</button> */}
      {/* <button onClick = {() => onClickingDelete(item.id) }>Close Item</button> */}
    </React.Fragment>
  );
}


function handleBuyingPintsButton(item, isSub, dif) {
  dif = parseInt(dif);
//   props.handleBuyingPintsClick({
//     Name: item.Name, 
//     Description: item.Description, 
//     Quantity: isSub ? (item.Quantity === 0 ? 0 : item.Quantity = parseInt(item.Quantity) - dif) : item.Quantity = parseInt(item.Quantity) + dif, //  --item.Quantity  ===  item.Quantity = item.Quantity - 1
//     id: item.id});
}



export default KegDetails; 