import React from 'react'
import './Articles.scss'
import NewArticles from '../NewArticles/NewArticles'
import TopArticles from '../TopArticles/TopArticles'
import InterestingArticles from '../InterestingArticles/InterestingArticles'

const Articles = () => {
  return (
    <div className="articles">
      <NewArticles />
      <TopArticles />
      <InterestingArticles />
    </div>
  )
}

export default Articles
