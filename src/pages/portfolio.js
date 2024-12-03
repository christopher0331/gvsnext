import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import Modal from '../components/Modal.js';
import '../app/portfolio.css'
import axios from 'axios';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import CoolLoader from '../components/CoolLoader.js';
import Head from 'next/head';
import { motion } from 'framer-motion';

AWS.config.credentials = new AWS.Credentials();

const S3Bucket = ({heroContent}) => {
  const [projectImages, setProjectImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleShowModal = (projectId) => {
    const selectedProject = projectImages.find(project => project[0].id === projectId);
    setCurrentProjectImages(selectedProject);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://379pj43m47.execute-api.us-west-2.amazonaws.com/default/gvsGetCreds")
        AWS.config.update({
          region: 'us-west-2',
          accessKeyId: response.data.accessKeyId,
          secretAccessKey: response.data.secretAccessKey,
        });

        const s3 = new AWS.S3();

        const projects = [];
        for (let i = 1; i <= 15; i++) {
          const projectFolder = `Portfolio/Project${i}/FullSize/`;
          const params = {
            Bucket: 'greenviewsolutionsimages',
            Prefix: projectFolder,
          };

          try {
            const data = await s3.listObjectsV2(params).promise();
            const images = data.Contents
              .filter(item => item.Key.endsWith('.webp') || item.Key.endsWith('.jpeg') || item.Key.endsWith('.JPG'))
              .map(item => ({
                id: i,
                url: `https://ik.imagekit.io/greenviewsolutions/${item.Key}?tr=w-700,h-700`,
              }));
            projects.push(images);
          } catch (err) {
            console.log(err);
          }
        }
        setProjectImages(projects);
      } catch (err) {
        console.log('error', err);
      }
    }

    fetchData().then(() => setLoading(false));
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-59K2K2F');
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <Head>
        <title>GreenView Solutions Portfolio - Showcasing Our Finest Work</title>
        <meta name="description" content="Explore our portfolio of stunning wood fences, privacy fences, vinyl fences, chainlink fences, and other exceptional projects. See the quality and craftsmanship of GreenView Solutions." />
        <link rel="canonical" href="https://greenviewsolutions.net/portfolio" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greenviewsolutions.net/portfolio" />
        <meta property="og:title" content="GreenView Solutions Portfolio" />
        <meta property="og:description" content="Explore our portfolio of stunning fences and exceptional projects. See the quality and craftsmanship of GreenView Solutions." />
        <meta property="og:image" content="https://greenviewsolutions.net/images/portfolio-preview.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://greenviewsolutions.net/portfolio" />
        <meta property="twitter:title" content="GreenView Solutions Portfolio" />
        <meta property="twitter:description" content="Explore our portfolio of stunning fences and exceptional projects. See the quality and craftsmanship of GreenView Solutions." />
        <meta property="twitter:image" content="https://greenviewsolutions.net/images/portfolio-preview.jpg" />

        {projectImages.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ImageGallery",
                "name": "GreenView Solutions Portfolio",
                "description": "A collection of our best fencing projects",
                "image": projectImages.map(project => ({
                  "@type": "ImageObject",
                  "contentUrl": project[0].url,
                  "description": `Fencing project ${project[0].id}`,
                  "name": `GreenView Solutions Fencing Project ${project[0].id}`,
                  "author": {
                    "@type": "Organization",
                    "name": "GreenView Solutions"
                  },
                  "datePublished": new Date().toISOString().split('T')[0] // Current date
                }))
              })
            }}
          />
        )}
      </Head>
      <div>
        <Header heroContent={heroContent} />  
        {loading ? (
          <CoolLoader />
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="portfolioTitle">
              <h1>Our Portfolio</h1>
            </div>
            <motion.div className="portfolioBlock" variants={containerVariants}>
              {projectImages.map((project) => (
                <motion.div key={project[0].id} variants={itemVariants}>
                  <div className="portfolioProjects">
                    <img src={project[0].url} className="portfolioImage" alt={`Project ${project[0].id}`} />
                    <div className="portfolioBody">
                      <button className="btn2" onClick={() => handleShowModal(project[0].id)}>
                        View Project
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
        {showModal && (
          <Modal
            show={showModal}
            onClose={handleCloseModal}
            projectImages={currentProjectImages}
          />
        )}
        <Footer />
      </div>
    </>
  );
}

export default S3Bucket;


export async function getStaticProps() {
  return {
    props: {
      heroContent: {
        title: 'Showcasing Our Finest Work',
        description: 'Explore our exceptional projects, showcasing our commitment to quality and craftsmanship. From innovative designs to meticulous execution, see how we bring visions to life.',
        features: ['Innovative designs', 'Quality craftsmanship', 'Meticulous execution'],
      },
    },
  };
}