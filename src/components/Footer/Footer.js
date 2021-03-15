import React from 'react'
import './Footer.scss'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-wrapper">
        <div className="footer-links">
          <a className="link-item" href="/#">
            Terms of Service
          </a>
          <a className="link-item" href="/#">
            Privacy Policy
          </a>
          <a className="link-item" href="/#">
            Subscription Policy
          </a>
        </div>
        <div className="footer-copyright">©Copyright © 2020 PlantIn. All rights reserved</div>
      </div>
    </div>
  </footer>
)

export default Footer
