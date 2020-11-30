import React from "react";
// import KegDetails from "./KegDetails";
import NewKegForm from "./NewKegForm";
import ListView from "./ListView";

class KegController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      onTap: [],
      selectedKeg: null,
      totalPintsLeft: 0
    }
  }

  //event handlers

  handleMainPageButtonClick = () => {  // sets state to normal
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        // selectedKeg: null    
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedKeg = (id) => { // view Keg in Detail
    // console.log(`id: ${id}`);
    const selectedKeg = this.state.onTap.filter((keg) => {
      // console.log(`keg: ${JSON.stringify(keg)}`);
      return keg.id === id;
    })[0];
    // console.log(`selectedKeg: ${JSON.stringify(selectedKeg)}`);
    this.setState({ selectedKeg: selectedKeg });
  }

  handleAddingNewKegToList = (newKeg) => { // adds new Keg to Array
    // console.log(`newKeg: ${JSON.stringify(newKeg)}`);

    const newOnTap = this.state.onTap
      .concat(newKeg);
    this.setState({
      onTap: newOnTap,
      formVisibleOnPage: false,
      totalPintsLeft: this.state.totalPintsLeft + 124
    });
  }

  handleBuyingPintsClick = (id) => {
    const selectedKeg = this.state.onTap.filter((keg) => {
      // console.log(`keg: ${JSON.stringify(keg)}`);
      return keg.id === id;
    })[0];
    
    console.log(`BEFORE: selectedKeg: ${JSON.stringify(selectedKeg)}`);

    selectedKeg.pintsLeft = selectedKeg.pintsLeft - 1;

    console.log(`AFTER: selectedKeg: ${JSON.stringify(selectedKeg)}`);
    
    this.setState({
      totalPintsLeft: this.state.totalPintsLeft - 1
    });
  }

  render() {
    let currentlyVisibleComponent = null;
    let buttonText = null;

    // if (this.state.editing) { // edit
    //   currentlyVisibleState = <EditItemForm
    //   item = {this.state.selectedItem}
    // onEditItem =  {this.handleEditingItemInList}/>

    if (this.state.formVisibleOnPage) { // catch is set
      currentlyVisibleComponent = <NewKegForm 
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to List of Kegs";
    } else {                                // default
      currentlyVisibleComponent = <ListView 
        kegs={this.state.onTap}
        pintsLeft={this.state.pintsLeft}
        handleBuyingPintsClick={this.handleBuyingPintsClick}
        onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleComponent}
        <button onClick={this.handleMainPageButtonClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default KegController; 