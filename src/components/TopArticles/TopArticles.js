import React from 'react'
import ArticleItem from '../ArticleItem/ArticleItem'
import { article2, article3 } from '../Articles/data'
import './TopArticles.scss'

const TopArticles = () => (
  <div className="top-articles">
    <div className="top-rubric">Top of the day</div>
    <div className="top-articles-list">
      <ArticleItem {...article2} />
      <ArticleItem {...article3} />
    </div>
  </div>
)

export default TopArticles
