import React from "react";
import KegDetails from "./KegDetails";
import NewKegForm from "./NewKegForm";
import ListView from "./ListView";


class KegController extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      formVisibleOnPage: false,
      onTap = [],
      selectedKeg: null,
    }
  }

  //event handlers

  handleClick = () => {  // sets state to normal
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedKeg = (id) => { // view Keg in Detail
    const selectedKef = this.state.keg
      .filter(keg => keg.id === id)[0];
    this.setState({selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => { // adds new Keg to Array
    const newOnTap = this.state.onTap
      .concat(newKeg);
    this.setState({
      onTap: newOnTap,
      formVisibleOnPage: false
    });
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) { // catch is set
      currentlyVisibleState = <NewKegForm 
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to List of Kegs";
    } else {                                // default
      currentlyVisibleState = <KegList 
        KegList={this.state.onTap} 
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