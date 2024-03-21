import Header from '../components/Header';
import Footer from '../components/Footer';
import FencingTypeCards from '@/components/FencingTypeCards';
import ChainLinkFenceTypes from '../components/ChainLinkFenceTypes.js';
import styles from '../components/FencingTypeCards.module.scss';
import stylesWood from '../components/WoodFencesStyles.module.scss';
import Image from 'next/image';
import ServicesSidebar from '@/components/ServicesSideBar';
import CallToActionSection from '@/components/CallToActionSection';
import SvgComponent from '@/components/SvgComponent';
import Head from 'next/head';

export default function ChainLinkFence() {

    return (
        <div>
            <Head>
                <title>GreenView Solutions Chainlink Fences</title>
                <meta name="description" content="This page is the chainlink fences page and contains information about our chainlink fences" />
                <link rel="canonical" href="https://greenviewsolutions.net/chainlink-fence" />
                <link rel="alternate" hreflang="en" href="https://greenviewsolutions.net/chainlink-fence" />
            </Head>
            <Header />
            <div className={stylesWood.woodFenceContainer}>
                <div>
                    <ServicesSidebar />
                </div>

                <div className={stylesWood.woodFenceInnerContainer}>
                    <h1>GreenView Solutions Chain-Link Fence Excellence</h1>
                    <p className={stylesWood.woodFenceContent}>
                        GreenView Solutions is renowned for offering top-tier chain-link fencing, combining durability with practicality. Our chain-link fences are ideal for both residential and commercial properties, providing a balance of security, visibility, and affordability. Backed by a solid warranty, our chain-link fences are a reliable and cost-effective choice for property delineation and security.
                    </p>

                    <h2 className={stylesWood.woodFenceContent}>Durable and Versatile Chain-Link Fencing</h2>
                    <p className={stylesWood.woodFenceInfo}>
                        Crafted with high-quality materials, our chain-link fences at GreenView Solutions stand up to various environmental conditions without succumbing to rust or deterioration. The versatility of chain-link fencing makes it a suitable option for everything from playgrounds to industrial sites, offering effective boundary demarcation while maintaining an open feel.
                    </p>

                    <h2 className={stylesWood.woodFenceContent}>Customizable and Easy-to-Maintain Chain-Link Options</h2>
                    <p className={stylesWood.woodFenceInfo}>
                        Understanding the diverse needs of our clients, GreenView Solutions offers customizable chain-link fencing solutions. Available in various heights, gauges, and coating options like vinyl or zinc, our fences can be tailored to match specific security requirements and aesthetic preferences. Moreover, the low maintenance nature of chain-link fencing ensures a hassle-free solution for years to come, making it an excellent investment for both residential and commercial properties.
                    </p>
                </div>
            </div>

            <CallToActionSection />

            <section className={styles.fenceInfoSectionContainer}>

                <div className={styles.fenceInfoSectionTitleAndP} >
                    <h2 className={styles.fenceInfoSectionTitleAndP} >Chain Link Fencing</h2>
                    <p className={styles.fenceInfoSectionTitleAndP}>Your paragraph about GreenView Solutions and chain link fence goes here.</p>
                </div>
            </section>


            <section className={styles.fenceTypeCardsContainer}>
                {ChainLinkFenceTypes.map(fenceType => (
                    <FencingTypeCards
                        key={fenceType.name}
                        name={fenceType.name}
                        image={fenceType.image}
                        description={fenceType.description}
                    />
                ))}
            </section>

            {/* <div className={styles.picketInfoSectionTitleAndP}>
                <h2 className={styles.picketInfoSectionTitleAndP}>Chain Link Fence Benefits</h2>
                <Image
                    src="/wood-top-finishes.png"
                    alt="GreenView Solutions"
                    className={styles.fenceInfoSectionImage}
                    layout="responsive"
                    width={150}
                    height={150}
                />
            </div> */}
            {/* Text - call to action with button to get free estimate */}
            <CallToActionSection />

            <SvgComponent />

            <Footer />
        </div>
    )
}