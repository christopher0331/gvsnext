// components/RecentArticles.js
import React from 'react';
import Link from 'next/link';
import styles from './RecentArticles.module.scss'; // Assume you have styling defined here

export default function RecentArticles({ posts }){
  // Assuming posts are already sorted by date in descending order,
  // you can limit to the last 5 articles here or ensure it's done before passing to this component
  const postsArray = Object.values(posts); // Convert posts object to an array of post data
  const recentPosts = postsArray.slice(0, 5); // Now you can use slice

  return (
    <aside className={styles.recentArticles}>
      <h3>Recent Articles</h3>
      <ul>
        {recentPosts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

