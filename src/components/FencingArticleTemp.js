import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag, MapPin, ArrowRight } from 'lucide-react';
import styles from './MyBlog.module.scss';

const FencingArticleTemp = ({ article }) => {
    // Extract the first image URL from the content if it exists
    const extractFirstImage = (htmlContent) => {
        const imgRegex = /<img[^>]+src="([^"\s]+)"/i;
        const match = imgRegex.exec(htmlContent);
        return match ? match[1] : null;
    };

    // Check if the user is from Denver area (this would be replaced with actual geolocation logic)
    const isDenverArea = true; // Placeholder - would be determined by actual geolocation

    // Featured image - either from the article metadata or extracted from content
    const featuredImage = article.featuredImage || extractFirstImage(article.contentHtml) || 'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/default-blog-image.jpg';

    return (
        <div className={styles.blogArticle}>
            {/* Article Header */}
            <div className={styles.articleHeader}>
                <div className={styles.articleMeta}>
                    <div className={styles.metaItem}>
                        <Calendar className={styles.metaIcon} />
                        <span>{article.date}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <User className={styles.metaIcon} />
                        <span>{article.author}</span>
                    </div>
                </div>

                {article.tags && article.tags.length > 0 && (
                    <div className={styles.tagContainer}>
                        {article.tags.map((tag) => (
                            <Link href={`/blog/tag/${tag}`} key={tag}>
                                <span className={styles.tag}>
                                    <Tag className={styles.tagIcon} />
                                    {tag}
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Featured Image */}
            <div className={styles.featuredImageContainer}>
                <Image 
                    src={featuredImage}
                    alt={"Featured image for " + article.title}
                    className={styles.featuredImage}
                    width={800}
                    height={500}
                    priority
                />
            </div>

            {/* Article Content */}
            <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: article.contentHtml }} />

            {/* Denver Area Call to Action */}
            {isDenverArea && (
                <div className={styles.denverCta}>
                    <h3>Serving the Denver Metro Area</h3>
                    <p>We noticed you&apos;re in the Denver area! We provide top-quality services for Denver residents including custom pergolas, decorative doors, and stamped concrete.</p>
                    <div className={styles.ctaButtons}>
                        <Link href="/contact" className={styles.primaryButton}>
                            Request a Free Consultation
                        </Link>
                        <Link href="/" className={styles.secondaryButton}>
                            Explore Our Services <ArrowRight className={styles.buttonIcon} />
                        </Link>
                    </div>
                </div>
            )}

            {/* Related Articles Section */}
            <div className={styles.relatedContent}>
                <h3>Continue Reading</h3>
                <Link href="/blog" className={styles.viewAllLink}>
                    Back to All Articles <ArrowRight className={styles.linkIcon} />
                </Link>
            </div>
        </div>
    )
}

export default FencingArticleTemp;