import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSortedPostsData } from 'utils/markdownParser';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}

const BlogIndex = ({ allPostsData }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPostsData.map(({ id, title, date, excerpt, tags, author }) => (
            <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
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
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;