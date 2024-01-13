// pages/index.js
import Header from '../components/Header';
import Homepage from '../components/Homepage';
import { getStaticProps as getHeaderStaticProps } from '../components/Header';
import Footer from '../components/Footer.js';

export default function Home({ headerData }) {
  return (
    <>
      <Header data={headerData} />
      <Homepage />
      <Footer />
    </>
  );
}

