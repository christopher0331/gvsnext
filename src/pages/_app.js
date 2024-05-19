// pages/_app.js
import { BlogProvider } from '../contexts/MyBlogContexts.js'; // Import your context
import { ImageIndexProvider } from '../contexts/ImageIndexContext.js'; // Import your ImageIndex context

function MyApp({ Component, pageProps }) {
  return (
    <BlogProvider>
      <ImageIndexProvider>
        <Component {...pageProps} />
      </ImageIndexProvider>
    </BlogProvider>
  );
}

export default MyApp;
