import React from "react";
// import Details from "./Details";
// import Create from "./Create";
import NewKegForm from "./NewKegForm";


class KegController extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  //event handlers

  render() {
    let currentlyVisibleState = null;
    if(true) { currentlyVisibleState = <NewKegForm />}
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {/* {button} */}
      </React.Fragment>
    );
  }
}
export default KegController; 