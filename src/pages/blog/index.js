// pages/blog/index.js
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header.js';
import Footer from '@/components/Footer.js';
import { getSortedPostsData } from 'utils/markdownParser.js'; // Correct path to your posts utility functions
import styles from '@/components/MyBlog.module.scss'; // Assuming you have a SCSS file named blogIndex.module.scss

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
          {allPostsData.map(({ id, title, date, excerpt }) => (
            <div key={id} className={styles.blogCard}> {/* Updated this line */}
              <h3>
                <Link className={styles.postTitle} href={`/blog/${id}`}>
                  {title}
                </Link>
              </h3>
              <small className={styles.postDate}>{date}</small>
              <p className={styles.postExcerpt}>{excerpt}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  };

export default BlogIndex;
