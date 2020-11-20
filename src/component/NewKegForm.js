import React from 'react'
import PropTypes from 'prop-types'
import {v4} from 'uuid'

function NewKegForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
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
};

export default NewKegForm; 