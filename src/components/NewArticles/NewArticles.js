import React from 'react'
import ArticleItem from '../ArticleItem/ArticleItem'
import { article1 } from '../Articles/data'
import './NewArticles.scss'

const NewArticles = () => (
  <div className="new-articles">
    <div className="new-rubric">
      <span className="figure" />
      <span className="text">New</span>
    </div>
    <div className="new-articles-list">
      <ArticleItem {...article1} />
    </div>
  </div>
)

export default NewArticles
