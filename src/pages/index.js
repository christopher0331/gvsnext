import HeaderNew from '../components/HeaderNew';
import Homepage from '../components/Homepage';
import Footer from '../components/Footer.js';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function Home({ headerData, heroContent }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <HeaderNew data={headerData} heroContent={heroContent} />
      <Homepage />
      <Footer />
    </ErrorBoundary>
  );
}

export async function getStaticProps() {
  return {    
      props: {
          heroContent: {
              title: 'Welcome to Our Home of Quality Fencing',
              description: 'Discover our wide selection of fencing solutions that combine style, durability, and security to meet your needs. Our products are crafted with precision and care, ensuring that you receive the best quality. Explore our range and find the perfect fit for your property today.',
              features: ['High quality', 'Eco-friendly', 'Custom designs'],
          },
      },
  };
}
