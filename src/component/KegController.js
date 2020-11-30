import React from "react";
import KegDetails from "./KegDetails";
import NewKegForm from "./NewKegForm";
import ListView from "./ListView";

class KegController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      onTap: [],
      selectedKeg: null,
    }
  }

  //event handlers

  handleClick = () => {  // sets state to normal
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
    console.log(`id: ${id}`);
    const selectedKeg = this.state.onTap.filter((keg) => {
      console.log(`keg: ${JSON.stringify(keg)}`);
      return keg.id === id;
    })[0];
    console.log(`selectedKeg: ${JSON.stringify(selectedKeg)}`);
    this.setState({ selectedKeg: selectedKeg });
  }

  handleAddingNewKegToList = (newKeg) => { // adds new Keg to Array
    console.log(`newKeg: ${JSON.stringify(newKeg)}`);

    const newOnTap = this.state.onTap
      .concat(newKeg);
    this.setState({
      onTap: newOnTap,
      formVisibleOnPage: false
    });
  }

  handleBuyingPintsClick = (kegToEdit) => {
    const editedOnTap = this.state.onTap
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      onTap: editedOnTap,
    });
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    // if (this.state.editing) { // edit
    //   currentlyVisibleState = <EditItemForm
    //   item = {this.state.selectedItem}
    // onEditItem =  {this.handleEditingItemInList}/>

    if (this.state.formVisibleOnPage) { // catch is set
      currentlyVisibleState = <NewKegForm 
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to List of Kegs";
    } else {                                // default
      currentlyVisibleState = <ListView 
        Kegs={this.state.onTap} 
        onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }




    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default KegController; 