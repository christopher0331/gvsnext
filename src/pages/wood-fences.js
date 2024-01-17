import Header from '../components/Header';
import Footer from '../components/Footer';
import FencingTypeCards from '@/components/FencingTypeCards';
import PicketTypeCard from '@/components/PicketTypeCard';
import FenceTypes from '../components/FenceTypes.js';
import PicketStyles from '../components/PicketStyles.js';
import styles from '../components/FencingTypeCards.module.scss';
import stylesP from '../components/PicketTypeCard.module.scss';
import Image from 'next/image';

export default function Fencing() {

    // Array of fence types, images and descriptions can be added here

    // Array of picket types

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Opening Paragraph */}
            {/* Pic */} {/* Paragraph about GrrerenView Solutions and wood fence*/}
            <section className={styles.fenceInfoSectionContainer}>
                <Image
                    src="/fenceTypesMain.png"
                    alt="GreenView Solutions"
                    className={styles.fenceInfoSection}
                    layout="responsive"
                    width={250} // Set a base width
                    height={250} // Set
                />

                <div className={styles.fenceInfoSectionTitleAndP} >
                    <h2 className={styles.fenceInfoSectionTitleAndP} >Wood Fencing Styles</h2>
                    <p className={styles.fenceInfoSectionTitleAndP}>Your paragraph about GreenView Solutions and wood fence goes here.</p>
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

            <div className={styles.picketInfoSectionTitleAndP}>
                <h2 className={styles.picketInfoSectionTitleAndP}>Wood Fencing</h2>
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
            </section>


            {/* Text - call to action with button to get free estimate */}
            {/* Call to Action */}

            {/* Picket Types and Design Types  -  3 card with three pickets type - and then below that 3 top types (Concave, convex, lattice tops)*/}
            <section>
                {/* {picketTypes.map(picket => (
                    <PicketTypeCard key={picket.name} name={picket.name} image={picket.image} description={picket.description} />
                ))} */}
            </section>

            <Footer />
        </div>
    )
}