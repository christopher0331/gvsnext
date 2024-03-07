import React from 'react';
import '../app/globals.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Image from 'next/image';
import CallToActionSection from '@/components/CallToActionSection';

const OutdoorLiving = () => {
  return (
    <div>
      <Header />
      <div style={{ disply: 'flex', flexDirection: 'column' }} >

        <h1 style={{ display: 'flex', flexDirection: 'column', color: 'darkGreen', justifyContent: 'center', textAlign: 'center', marginTop: '2em', fontSize: '5em', fontFamily: 'fantasy' }}>Outdoor Living Year Round</h1>

        <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'spaceAround', flexDirection: 'row', color: 'black' }}>

          <div style={{ display: 'flex', marginLeft: '4em', width: '210%' }}>
            <img style={{ display: 'flex', border: '4px solid darkgreen', borderRadius: '14px', alignItems: 'center' }} src='https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/outdoorLivingPergolaStucture.JPG' />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'black', margin: '2em 4em', paddingTop: '5em' }}>
              <h2 style={{ fontSize: '25px', marginBottom: '1em' }}>Elevate Your Backyard Retreat</h2>
              <p style={{ display: 'flex', width: '75%' }}>
                Crafting a superior deck forms the foundation of countless possibilities for your outdoor haven in Denver. Sourcing from leading suppliers in the market, we present a diverse array of personalization for your venture. For a year-round Denver outdoor experience, we advocate the adoption of mineral-based composite decking. This choice ensures enduring quality and resilience across all seasons. Engage with our skilled designers at GreenView Solutions to discover the enhancements we can bring to your outdoor area.
              </p>
            </div>


            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'black', margin: '2em 4em' }}>
              <h2 style={{ fontSize: '25px', marginBottom: '1em' }}>Exquisite Design and Implementation for Outdoor Environments</h2>
              <p style={{ width: '75%' }}>
                GreenView Solutions brings over a decade and a half of expertise in converting Denver homes into exquisite outdoor sanctuaries. We oversee the entire process, encompassing an array of features from decks and patios to fireplaces, outdoor culinary areas, bespoke pools, and patio stonework. Our proficient designers are committed to optimizing your environment and aligning with your financial plans. Even if you envision just a new deck, your property might necessitate a complete outdoor recreation area to comply with regulations and local permits. Our team provides a suite of design and installation services to create your ideal backyard haven. Contact GreenView Solutions to connect with our expert outdoor living space specialists in Denver today.
              </p>
            </div>

          </div>
        </div>

        <CallToActionSection />
      </div>

      <Footer />
    </div>

  );
};

export default OutdoorLiving;
