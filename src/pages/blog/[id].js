// pages/blog/[id].js
import React from 'react';
import { getPostData, getAllPostIds, getSortedPostsData } from 'utils/markdownParser.js'; // Assume your markdownParser.js functions are exported here
import { useRouter } from 'next/router';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import styles from '../../components/MyBlog.module.scss';
import FencingArticleTemp from '@/components/FencingArticleTemp.js';
import RecentArticles from '../../components/RecentArticles';
import ArticlesByAuthor from '@/components/ArticlesByAuthor.js';

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
  const postsByAuthor = allPostsData.filter(post => post.author === postData.author && post.id !== postData.id);

  return {
    props: {
      postData,
      recentPosts, // Pass recentPosts as a prop
      postsByAuthor
    },
  };
}


const BlogPost = ({ postData, recentPosts, postsByAuthor }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <Header postTitle={postData.title}/>

      <div className={styles.articlePage}>
        
        <div className={styles.contentLayout}>

          <FencingArticleTemp article={postData} />
          
          <div className={styles.articleSidebar}>
            <div>
              <RecentArticles posts={recentPosts} />
            </div>
            <div>
              <ArticlesByAuthor postsByAuthor={postsByAuthor} />
            </div>
          </div>
        
        
        </div>
      </div>
      <Footer />
    </article>
  );
};

export default BlogPost;

