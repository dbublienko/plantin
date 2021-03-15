import React from 'react'
import './ArticleItem.scss'

const ArticleItem = ({ rubric, image, altImage, time, title, description, loading }) => {
  const styles = {}

  switch (rubric) {
    case 'new':
      styles.body = 'new-body'
      styles.image = 'new-image'
      styles.text = 'new-text'
      styles.time = 'new-time'
      styles.title = 'new-title'
      styles.description = 'new-description'
      break
    case 'top':
      styles.body = 'top-body'
      styles.image = 'top-image'
      styles.text = 'top-text'
      styles.time = 'top-time'
      styles.title = 'top-title'
      styles.description = 'top-description'
      break
    case 'interesting':
      styles.body = loading ? 'interesting-body loading' : 'interesting-body'
      styles.image = 'interesting-image'
      styles.imageLoader = loading ? 'image-loading' : ''
      styles.text = 'interesting-text'
      styles.time = loading ? 'interesting-time time-loading' : 'interesting-time'
      styles.title = loading ? 'interesting-title title-loading' : 'interesting-title'
      styles.description = loading ? 'interesting-description description-loading' : 'interesting-description'
      break
    default:
      break
  }

  return (
    <a className={styles.body} href="/#">
      <span className={styles.imageLoader}>
        <img className={styles.image} src={image} alt={altImage} />
      </span>
      <div className={styles.text}>
        <h4 className={styles.time}>{time}</h4>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.description}>{description}</h3>
      </div>
    </a>
  )
}

export default ArticleItem
