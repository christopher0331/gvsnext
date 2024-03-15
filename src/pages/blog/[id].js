// pages/blog/[id].js
import React from 'react';
import { getPostData, getAllPostIds, getSortedPostsData } from 'utils/markdownParser.js'; // Assume your markdownParser.js functions are exported here
import { useRouter } from 'next/router';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import styles from '../../components/MyBlog.module.scss';
import FencingArticleTemp from '@/components/FencingArticleTemp.js';
import RecentArticles from '../../components/RecentArticles';

// Function to get static paths
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // Can also be true or 'blocking'
  };
}

// Function to get static props
export async function getStaticProps({ params }) {

  // Fetch individual post data
  const postData = await getPostData(params.id);

  // Fetch data for all posts
  const allPostsData = getSortedPostsData();

  // Optionally, select the last 5 posts for the RecentArticles component
  const recentPosts = allPostsData.slice(0, 5);

  return {
    props: {
      postData,
      recentPosts, // Pass recentPosts as a prop
    },
  };
}


const BlogPost = ({ postData, recentPosts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <Header />

      <div className={styles.articlePage}>
        <h1>{postData.title}</h1>
        <div className={styles.contentLayout}>
          <FencingArticleTemp article={postData} />
          <div className={styles.placeHolder}>
            <RecentArticles posts={recentPosts} />
          </div>
        </div>
      </div>
      <Footer />
    </article>
  );
};

export default BlogPost;

