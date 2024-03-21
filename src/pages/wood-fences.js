import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FencingTypeCards from '@/components/FencingTypeCards';
import PicketTypeCard from '@/components/PicketTypeCard';
import FenceTypes from '../components/FenceTypes.js';
import PicketStyles from '../components/PicketStyles.js';
import styles from '../components/FencingTypeCards.module.scss';
import stylesWood from '../components/WoodFencesStyles.module.scss';
import ServiceSidebar from '../components/ServicesSideBar.js';
import Image from 'next/image';
import CallToActionSection from '@/components/CallToActionSection';
import Head from 'next/head';

export default function Fencing() {
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const constructionText = `We build your wood fence from scratch on site. We set every post in concrete so your posts won’t shift or lean. We nail up every board one by one using hot-dipped galvanized ring shank nails that won’t rust or pull apart. This allows for a custom construction that is stronger than pre-built panels. Your wood fence is built to last.

    Board on board style wood fencing offers complete privacy with overlapping boards while stockade wood fencing offers privacy with boards that abut one another but do not overlap. Shadowbox style wood fencing offers some privacy but is not completely opaque when viewed from an angle and therefore offers less wind resistance. It is for this reason that many communities in Broward County require their residents to install shadowbox wood fencing instead of complete privacy styles.

    Although wood fencing is not as durable or long-lasting as vinyl or aluminum fencing, with some preventative maintenance, your wood fence can still look good for years. Staining and sealing offers surface protection against weathering, fading and changes in climate.

    We make all the standard styles of wood fence and also customize wood fencing for customers who have specific ideas about what type of wood fencing will accentuate their home. Please call one of our salespeople today to get an estimate for your new wood fence.`;

    // Truncate the text if it is longer than 350 characters and `isReadMore` is `true`
    const truncatedText = isReadMore ? constructionText.slice(0, 350) + "..." : constructionText;

    return (
        <div>
            <Head>
                <title>GreenView Solutions Wood Fences</title>
                <meta name="description" content="This page is the Wood Fences page and contains information about our Wood Fences!" />
                <link rel="canonical" href="https://greenviewsolutions.net/wood-fences" />

            </Head>

            <div>
                {/* Header */}
                <Header />
                <div className={stylesWood.woodFenceContainer}>
                    <div>
                        <ServiceSidebar />
                    </div>

                    <div className={stylesWood.woodFenceInnerContainer}>
                        <h1 >Wood Fence Lumber</h1>

                        <p className={stylesWood.woodFenceContent}>We use Superior pressure treated pine lumber to build your wood fence. We choose Superior lumber because it has an excellent warranty. Superior lumber fence pickets come standard with a minimum fifteen year warranty against termite damage and rot. Our posts and horizontal rails come with a lifetime warranty against termite damage and rot. Your wood fence is guaranteed to last.</p>

                        <h2 className={stylesWood.woodFenceContent}> Wood Fence Specification</h2>

                        <p className={stylesWood.woodFenceInfo}>We use heavy duty lumber to build your wood fence. The specification we use is derived from the Miami-Dade wind code. In other words, we build your wood fence to the highest possible building standard. The only difference is we install most of our wood fences with posts every eight feet instead of every four feet, unless otherwise specified. Our specification includes:</p>
                        <ul className={stylesWood.specificationList}>
                            <li>1×6 pickets</li>
                            <li>2×4 rails</li>
                            <li>4×6 gate hinge posts</li>
                            <li>4×4 posts</li>
                        </ul>
                        <p className={stylesWood.woodFenceInfo}> You get a heavy duty fence that will withstand the toughest conditions.</p>

                        <h2 className={stylesWood.woodFenceContent}>Construction</h2>
                        <p className={stylesWood.constructionDetails}>
                            {truncatedText}
                        </p>
                        <button onClick={toggleReadMore} className={stylesWood.readMoreButton}>
                            {isReadMore ? "Read More" : "Read Less"}
                        </button>
                    </div>


                </div>
                <CallToActionSection />
                {/* Opening Paragraph */}
                {/* Pic */} {/* Paragraph about GrrerenView Solutions and wood fence*/}
                <section className={styles.fenceInfoSectionContainer}>
                    <div className={styles.fenceInfoSectionTitleAndP} >
                        <h2 className={styles.fenceInfoSectionTitleAndP} >Wood Fencing Styles</h2>
                    </div>
                </section>

                {/* Wood Fence Types  - Make 9 fence types all equal size, need pic on tope and text below about that style*/}
                <section className={styles.fenceTypeCardsContainer}>
                    {FenceTypes.map(fenceType => (
                        <FencingTypeCards
                            key={fenceType.name}
                            name={fenceType.name}
                            image={fenceType.image}
                            description={fenceType.description}
                        />
                    ))}
                </section>
                {/*             

            <div className={styles.picketInfoSectionTitleAndP}>
                <h2 className={styles.picketInfoSectionTitleAndP}>W</h2>
                <h3 className={styles.picketInfoSectionTitleAndP}>Customer Top Finishes</h3>
                <Image
                    src="/wood-top-finishes.png"
                    alt="GreenView Solutions"
                    className={styles.fenceInfoSectionImage}
                    layout="responsive"
                    width={250} // Set a base width
                    height={250} // Set
                />
            </div>
            

            
            <section className={styles.picketTypeCardsContainer}>
                {PicketStyles.map(picketStyle => (
                    <PicketTypeCard
                        key={picketStyle.name}
                        name={picketStyle.name}
                        image={picketStyle.image}
                        description={picketStyle.description}
                    />
                ))}
            </section> */}


                {/* Picket Types and Design Types  -  3 card with three pickets type - and then below that 3 top types (Concave, convex, lattice tops)*/}
                <section className={styles.fenceInfoSectionContainer}>
                    <div className={styles.fenceInfoSectionTitleAndP} >
                        <h2 className={styles.fenceInfoSectionTitleAndP} >Custom Top Finishes</h2>
                    </div>
                </section>
                <section className={styles.fenceTypeCardsContainer}>
                    {PicketStyles.map(picket => (
                        <PicketTypeCard key={picket.name} name={picket.name} image={picket.image} description={picket.description} />
                    ))}
                </section>

                <Footer />
            </div>

        </div>
    )
}