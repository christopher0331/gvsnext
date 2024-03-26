// pages/blog/index.js
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header.js';
import Footer from '@/components/Footer.js';
import { getSortedPostsData } from 'utils/markdownParser.js';
import styles from '@/components/MyBlog.module.scss';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const BlogIndex = ({ allPostsData }) => {
  return (
    <div className={styles.blogContainer}>
      <Header />
      <div className={styles.postsList}>
        {allPostsData.map(({ id, title, date, excerpt, tags, author }) => (
          <div key={id} className={styles.blogCard}>
            <h3>
              <Link href={`/blog/${id}`} className={styles.postTitle}>{title}</Link>
            </h3>
            <small className={styles.postDate}>{date} - {author}</small>
            <p className={styles.postExcerpt}>{excerpt}</p>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {tags.map((tag, index) => (
                  <React.Fragment key={tag}>
                    {index > 0 ? '_' : ''} {/* Add comma for subsequent tags */}
                    <Link href={`/blog/tag/${tag}`} className={styles.postTag}>{tag}</Link>
                  </React.Fragment>
                ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogIndex;
