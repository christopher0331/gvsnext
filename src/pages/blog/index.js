import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Calendar, User, Tag, ArrowRight, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSortedPostsData } from 'utils/markdownParser';
import styles from '@/components/MyBlog.module.scss';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      heroContent: {
        title: 'Welcome to Our Blog',
        description: 'Welcome to our blog, where you can explore a wide range of articles, insights, and stories. Stay informed with the latest trends, tips, and in-depth analysis from our team of experts. Discover new perspectives and enhance your knowledge with our curated content.',
        features: ['Latest articles', 'Expert insights', 'In-depth analysis'],
      },
    },
  };
}

const BlogIndex = ({ allPostsData, heroContent }) => {
  const router = useRouter();
  
  // Function to extract the first image from content
  const extractFirstImage = (excerpt) => {
    const imgRegex = /<img[^>]+src="([^"\s]+)"/i;
    const match = imgRegex.exec(excerpt);
    return match ? match[1] : null;
  };
  
  // Check if the user is from Denver area (this would be replaced with actual geolocation logic)
  const isDenverArea = true; // Placeholder - would be determined by actual geolocation

  return (
    <div className="min-h-screen bg-gray-100">
      <Header heroContent={heroContent} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">Blog Posts</h1>
        
        {/* Denver Area Call to Action */}
        {isDenverArea && (
          <div className={styles.denverCta} style={{ marginBottom: '3rem' }}>
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <h3>Serving the Denver Metro Area</h3>
            </div>
            <p>We noticed you&apos;re in the Denver area! Browse our articles for insights on outdoor living solutions perfect for Colorado&apos;s climate.</p>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPostsData.map(({ id, title, date, excerpt, tags, author, featuredImage }, index) => {
            // Get featured image or extract from content
            const postImage = featuredImage || extractFirstImage(excerpt) || 'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/default-blog-image.jpg';
            
            return (
              <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={postImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    width={400}
                    height={200}
                    priority={index === 0}
                  />
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-black">{title}</h2>
                  <p className="text-gray-600 mb-4">{excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span>{author}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-300 transition-colors duration-200"
                        onClick={() => router.push(`/blog/tag/${tag}`)}
                      >
                        <Tag className="w-3 h-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/blog/${id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;
