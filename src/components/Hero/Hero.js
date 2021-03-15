import React from 'react'
import Path from '../Path/Path'
import SearchSection from '../SearchSection/SearchSection'
import Articles from '../Articles/Articles'
import './Hero.scss'

const Hero = () => (
  <main className="hero">
    <div className="container">
      <div className="hero-wrapper">
        <Path />
        <SearchSection />
        <Articles />
      </div>
    </div>
  </main>
)

export default Hero
