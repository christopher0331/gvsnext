// pages/blog/[id].js
import React from 'react';
import Link from 'next/link';
import { getPostData, getAllPostIds, getSortedPostsData } from 'utils/markdownParser.js'; // Ensure this file exists and exports the required functions
import { useRouter } from 'next/router';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import styles from '../../components/MyBlog.module.scss';
import FencingArticleTemp from '@/components/FencingArticleTemp.js';
import RecentArticles from '../../components/RecentArticles';
import ArticlesByAuthor from '@/components/ArticlesByAuthor.js';
// We'll use the existing components instead of the ones that don't exist yet

// Function to get static paths
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, 
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
      recentPosts, 
      postsByAuthor
    },
  };
}

const BlogPost = ({ postData, recentPosts, postsByAuthor }) => {
  const router = useRouter();
  
  // Check if the user is from Denver area (this would be replaced with actual geolocation logic)
  const isDenverArea = true; // Placeholder - would be determined by actual geolocation

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Extract the first image URL from the content if it exists
  const extractFirstImage = (htmlContent) => {
    const imgRegex = /<img[^>]+src="([^"\s]+)"/i;
    const match = imgRegex.exec(htmlContent);
    return match ? match[1] : null;
  };

  // Featured image - either from the article metadata or extracted from content
  const featuredImage = postData.featuredImage || extractFirstImage(postData.contentHtml) || 'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/default-blog-image.jpg';

  return (
    <article>
      <Header postTitle={postData.title} />

      <div className={styles.articlePage}>
        <div className={styles.contentLayout}>
          {/* Use either the enhanced component or the original one */}
          <FencingArticleTemp article={postData} />
          
          <div className={styles.articleSidebar}>
            {/* Denver-specific CTA for sidebar */}
            {isDenverArea && (
              <div className="mb-6">
                <div className={styles.sidebarSection}>
                  <h3 className={styles.sidebarTitle}>Denver Services</h3>
                  <p className="mb-4">Looking for quality outdoor solutions in Denver? We offer specialized services for Colorado&apos;s unique climate.</p>
                  <Link href="/contact" className={styles.primaryButton} style={{ display: 'inline-block', textAlign: 'center', width: '100%' }}>
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            )}
            
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
