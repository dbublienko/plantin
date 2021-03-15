import React from 'react'
import logo from '../../images/logo.svg'
import './Promo.scss'

const Promo = () => (
  <section className="promo-section">
    <h3 className="promo-logo">
      <img src={logo} alt="Logo" />
      <span className="promo-text">PlantIn</span>
    </h3>
    <h2 className="promo-title">Get unlimited access to exclusive articles</h2>
    <h3 className="promo-subtitle">Get rid of limits and read everything you wish</h3>
    <input type="button" className="promo-button" value="Try For Free" />
  </section>
)

export default Promo
