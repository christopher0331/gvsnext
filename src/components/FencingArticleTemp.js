import React from 'react';
import styles from './MyBlog.module.scss';

const FencingArticleTemp = ({ article }) => {

    return (
        <div className={styles.blogArticle}>
            {article.date} - {article.author}
            <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
        </div>
    )

}

export default FencingArticleTemp;