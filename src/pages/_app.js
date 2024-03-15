// pages/_app.js
import { BlogProvider } from '../contexts/MyBlogContexts.js'; // Import your context

function MyApp({ Component, pageProps }) {
  return (
    <BlogProvider>
        <Component {...pageProps} />
    </BlogProvider>
  );
}

export default MyApp;
