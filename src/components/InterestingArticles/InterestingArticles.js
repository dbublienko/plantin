import React from 'react'
import { article4, article5, article6 } from '../Articles/data'
import Promo from '../Promo/Promo'
import ArticleItem from '../ArticleItem/ArticleItem'
import './InterestingArticles.scss'

const InterestingArticles = () => {
  // eslint-disable-next-lines
  const loading = true
  return (
    <div className="interesting-articles">
      <div className="interesting-rubric">Interesting</div>
      <div className="interesting-articles-list">
        <ArticleItem {...article4} />
        <ArticleItem {...article5} />
        <ArticleItem {...article6} />
        <ArticleItem {...article4} />
        <ArticleItem {...article6} />
        <ArticleItem {...article5} />
        <Promo />
        <ArticleItem {...article5} />
        <ArticleItem {...article6} />
        <ArticleItem {...article4} />
        <ArticleItem {...article6} />
        <ArticleItem {...article4} />
        <ArticleItem {...article5} />
        <ArticleItem rubric="interesting" loading={loading} />
        <ArticleItem rubric="interesting" loading={loading} />
        <ArticleItem rubric="interesting" loading={loading} />
      </div>
    </div>
  )
}

export default InterestingArticles
