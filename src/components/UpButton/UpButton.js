import React from 'react'
import upButton from '../../images/arrow-up.svg'
import './UpButton.scss'

const UpButton = () => (
  <button type="button" className="up-button">
    <img src={upButton} alt="Up button" />
  </button>
)

export default UpButton
