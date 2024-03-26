// pages/blog/tag/[tag].js
import React from 'react';
import { getSortedPostsData } from 'utils/markdownParser';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '@/components/MyBlog.module.scss';

export async function getStaticPaths() {
  const allPostsData = getSortedPostsData();
  const tags = new Set(allPostsData.flatMap(post => post.tags));

  const paths = Array.from(tags).map(tag => ({
    params: { tag },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsData();
  const filteredPosts = allPostsData.filter(post =>
    post.tags.includes(params.tag)
  );

  return {
    props: {
      filteredPosts,
      tag: params.tag,
    },
  };
}



const TaggedPosts = ({ filteredPosts, tag }) => {
  const pageTitle = `Articles tagged with '${tag}'`;
  return (
    <div className={styles.blogContainer}>
      <Header postTitle={pageTitle} />
      <div className={styles.postsList}>
        {filteredPosts.map(({ id, title, date, author, excerpt, tags }) => (
          <div key={id} className={styles.blogCard}>
            <h3>
              <Link href={`/blog/${id}`} className={styles.postTitle}>{title}</Link>
            </h3>
            <small className={styles.postDate}>{date} - {author}</small>
            <p className={styles.postExcerpt}>{excerpt}</p>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
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

export default TaggedPosts;
