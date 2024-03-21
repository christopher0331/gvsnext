import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import CustomModal from '../components/CustomModal.js';
import '../app/portfolio.css'
import axios from 'axios';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import CoolLoader from '../components/CoolLoader.js';
import Head from 'next/head';

AWS.config.credentials = new AWS.Credentials();
const S3Bucket = () => {
  const [projectImages, setProjectImages] = useState([]);
  const [show, setShow] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleShow = (id) => {
    setCurrentProjectId(id);
    setShow(true);
  };

  const handleClose = (id) => {
    setCurrentProjectId(id);
    setShow(false);
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




  return (
    <>
      <Head>
        <title>GreenView Solutions Portfolio Page</title>
        <meta name="description" content="This page is the portoflio page and contains our portfolio of wood fences, privacy fences, vinyl fences, chainlink fences and other projects" />
        <link rel="canonical" href="https://greenviewsolutions.net/portfolio" />
        <link rel="alternate" hreflang="en" href="https://greenviewsolutions.net/portfolio" />

      </Head>
      <div>
        <Header />
        {loading ? (
          <CoolLoader />
        ) : (
          <ul>
            <div id="primaryBox">
              <div className="portfolioTitle">
                <h1 style={{ color: 'black' }}>Portfolio</h1>
              </div>
              <div className="portfolioBlock">
                {projectImages.map((project) => (
                  <div key={project[0].id}>
                    <div className="portfolioProjects">
                      <img src={project[0].url} className="portfolioImage" alt="" />
                      <div className="portfolioBody">
                        <div onClick={() => handleShow(project[0].id)}>
                          <div className="btn2 from-left2">View Project</div>
                        </div>
                        {project.length > 0 && (
                          <CustomModal
                            show={show}
                            handleClose={handleClose}
                            currentProjectId={currentProjectId}
                            projectNumber={project[0].id}
                            images={project.map((image) => image.url)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ul>
        )}

        <Footer />
      </div>
    </>
  );
}

export default S3Bucket;