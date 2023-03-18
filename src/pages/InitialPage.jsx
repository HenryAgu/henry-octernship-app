import React from 'react'

// stylesheet
import '../css/InitialPage.css'

const InitialPage = () => {
  return (
    <div className='initial_page'>
      <div className="form">
        <input type="text" placeholder='Enter a text' required/>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default InitialPage