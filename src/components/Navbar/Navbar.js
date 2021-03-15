import React from 'react'
import logo from '../../images/logo.svg'
import searchIcon from '../../images/search-icon.svg'
import avatarIcon from '../../images/avatar-icon.jpg'
import burgerIcon from '../../images/menu-icon.svg'
import './Navbar.scss'

const Navbar = () => (
  <nav className="navbar">
    <div className="wrapper">
      <a className="navbar-logo" href="/#">
        <img className="navbar-img" src={logo} alt="Logo" />
        <h1 className="logo-text">PlantIn</h1>
      </a>
      <div className="navbar-menu">
        <a className="navbar-item" href="/#">
          Discover
        </a>
        <a className="navbar-item" href="/#">
          My Plants
        </a>
        <a className="navbar-item" href="/#">
          Diseases
        </a>
        <a className="navbar-item" href="/#">
          Blog
        </a>
        <a className="navbar-item" href="/#">
          FAQ
        </a>
        <a className="navbar-item" href="/#">
          Contact Us
        </a>
      </div>
    </div>
    <div className="navbar-search">
      <button type="button" className="search-btn">
        <img src={searchIcon} alt="Search button" />
      </button>
      <button type="button" className="user-btn">
        <img src={avatarIcon} alt="User menu" />
      </button>
      <button type="button" className="burger-btn">
        <img src={burgerIcon} alt="Burger button" />
      </button>
    </div>
  </nav>
)

export default Navbar
