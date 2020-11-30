import React from 'react'
import PropTypes from 'prop-types'
import {v4} from 'uuid'

function NewKegForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegForm}>
        <input
          type='text'
          name='Name'
          placeholder='Enter a Name' />
        <input
          type='text'
          name='Brand'
          placeholder='Enter a Brand' />
          <input
          type='text'
          name='Price'
          placeholder='Enter a Price' />
          <input
          type='text'
          name='AlcoholContent'
          placeholder='Enter the Alcohol Content' />
          <button type ='submit'>Submit</button>
      </form>
    </React.Fragment>
  )

  function handleNewKegForm(event){
    event.preventDefault();
    props.onNewKegCreation({ Name: event.target.Name.value, Brand: event.target.Brand.value, Price: event.target.Price.value, AlcoholContent: event.target.AlcoholContent.value, id: v4() });
  }
};

export default NewKegForm; 

NewKegForm.prototypes = {
  onNewKegCreation: PropTypes.func.isRequired
}