import React from 'react';
import Link from 'next/link';
import styles from './ArticlesByAuthor.module.scss';

const PostsByAuthor = ({ postsByAuthor }) => {
    return (
        <div className={styles.articlesByAuthor}>
            <h1>Articles by Author</h1>
            <ul>
                {postsByAuthor.map(({ id, title, date }) => (
                    <li key={id}>
                        <Link href={`/blog/${id}`}>
                            <div>
                                <h2>{title}</h2>
                                <p>{date}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsByAuthor;
