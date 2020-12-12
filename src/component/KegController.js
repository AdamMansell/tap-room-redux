import React from "react";
import KegDetails from "./KegDetails";
import NewKegForm from "./NewKegForm";
import ListView from "./ListView";
import { connect } from 'react-redux';
import changeFormVisibleOnPage from "../actionCreator/changeFormVisibleOnPage";

class KegController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {      
      onTap: [],
      selectedKeg: null,
      kegDetailsVisible: false,
      totalPintsLeft: 0
    }
  }

  //event handlers

  handleMainPageButtonClick = () => {  // sets state to normal
    if (this.state.selectedKeg != null) {
      this.setState({        
        kegDetailsVisible: false,
        selectedKeg: null    
      });
      this.props.setFormVisibleOnPage(false);
    } else {
      this.props.setFormVisibleOnPage(!this.props.formVisibleOnPage);
    }
  }

  handleChangingSelectedKeg = (id) => { // view Keg in Detail
    // console.log(`id: ${id}`);
    const selectedKeg = this.state.onTap.filter((keg) => {
      // console.log(`keg: ${JSON.stringify(keg)}`);
      return keg.id === id;
    })[0];
    // console.log(`selectedKeg: ${JSON.stringify(selectedKeg)}`);
    this.setState({ selectedKeg: selectedKeg, kegDetailsVisible: true });    
  }

  handleAddingNewKegToList = (newKeg) => { // adds new Keg to Array
    // console.log(`newKeg: ${JSON.stringify(newKeg)}`);

    const newOnTap = this.state.onTap
      .concat(newKeg);
    this.setState({
      onTap: newOnTap,      
      totalPintsLeft: this.state.totalPintsLeft + 124
    });
    this.props.setFormVisibleOnPage(false);
  }

  handleBuyingPintsClick = (id) => {
    const selectedKeg = this.state.onTap.filter((keg) => {
      // console.log(`keg: ${JSON.stringify(keg)}`);
      return keg.id === id;
    })[0];
    selectedKeg.pintsLeft = selectedKeg.pintsLeft > 0 ?  selectedKeg.pintsLeft - 1 : 0;
  
    let newPintsLeft = this.state.totalPintsLeft > 0 ? this.state.totalPintsLeft - 1 : 0;

    this.setState({
      totalPintsLeft: newPintsLeft
    });
  }

  render() {
    let currentlyVisibleComponent = null;
    let buttonText = null;

    // if (this.state.editing) { // edit
    //   currentlyVisibleState = <EditItemForm
    //   item = {this.state.selectedItem}
    // onEditItem =  {this.handleEditingItemInList}/>

    if (this.props.formVisibleOnPage) { // catch is set
      currentlyVisibleComponent = <NewKegForm 
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to List of Kegs";
    }
    else if (this.state.kegDetailsVisible) {
      currentlyVisibleComponent = <KegDetails keg={this.state.selectedKeg} />;
      buttonText = "Return to List of Kegs";
    }
  
    else {                                // default
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

const mapStateToProps = ({ formVisibleOnPage }) => ({ formVisibleOnPage });

const mapDispatchToProps = dispatch => ({
  setFormVisibleOnPage: formVisibleOnPage => dispatch(changeFormVisibleOnPage(formVisibleOnPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(KegController);