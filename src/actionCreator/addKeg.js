export default function addKeg(keg) {
  return { type: "ADD_KEG", payload: keg }
}




//  handleAddingNewKegToList = (newKeg) => {
//     const { dispatch } = this.props;
//     const { name, brand, price, alcoholContent, pintsLeft } = newTicket;
//     const action = {
//       type: 'ADD_TICKET',
//       name: name,
//       brand: brand,
//       price: price,
//       alcoholContent: alcoholContent,
//       pintsLeft: pintsLeft
//     }
//     dispatch(action);
//     this.setState({formVisibleOnPage: false});
//   }