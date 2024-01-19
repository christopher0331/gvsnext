import Header from '../components/Header';
import Footer from '../components/Footer';
import FencingTypeCards from '@/components/FencingTypeCards';
import ChainLinkFenceTypes from '../components/ChainLinkFenceTypes.js';
import styles from '../components/FencingTypeCards.module.scss';
import Image from 'next/image';

export default function ChainLinkFence() {

    return (
        <div>
            <Header />

            <section className={styles.fenceInfoSectionContainer}>
                <Image
                    src="/chainLinkFence.png"
                    alt="GreenView Solutions!"
                    className={styles.fenceInfoSection}
                    layout="responsive"
                    width={250} // Set a base width
                    height={250} // Set
                />

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

            <div className={styles.picketInfoSectionTitleAndP}>
                <h2 className={styles.picketInfoSectionTitleAndP}>Chain Link Fence Benefits</h2>
                <Image
                    src="/wood-top-finishes.png"
                    alt="GreenView Solutions"
                    className={styles.fenceInfoSectionImage}
                    layout="responsive"
                    width={150}
                    height={150}
                />
            </div>
            {/* Text - call to action with button to get free estimate */}
            <Footer />
        </div>
    )
}