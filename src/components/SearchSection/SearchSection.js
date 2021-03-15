import React from 'react'
import './SearchSection.scss'

const SearchSection = () => (
  <section className="search-section">
    <h2 className="search-title">Stay always tuned with planting trends</h2>
    <h3 className="search-subtitle">
      <span>Tips & Tricks</span> selected specially for <span>you</span>!
    </h3>
    <input type="text" className="search-input" placeholder="Search" />
  </section>
)

export default SearchSection
