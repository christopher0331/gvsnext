import Header from '../components/Header';
import Footer from '../components/Footer';
import FencingTypeCards from '@/components/FencingTypeCards';
import PicketTypeCard from '@/components/PicketTypeCard';
import FenceTypesVinyl from '../components/FenceTypesVinyl.js';
import PicketStyles from '../components/PicketStyles.js';
import styles from '../components/FencingTypeCards.module.scss';
import stylesWood from '../components/WoodFencesStyles.module.scss';
import Image from 'next/image';
import ServicesSidebar from '@/components/ServicesSideBar';
import CallToActionSection from '@/components/CallToActionSection.js';
export default function VinylFencing() {

    // Array of fence types, images and descriptions can be added here

    // Array of picket types

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Opening Paragraph */}
            <div className={stylesWood.woodFenceContainer}>
                <div>
                    <ServicesSidebar />
                </div>

                <div className={stylesWood.woodFenceInnerContainer}>
                    <h1>GreenView Solutions Vinyl Fence Assurance</h1>
                    <p className={stylesWood.woodFenceContent}>
                        GreenView Solutions provides a robust guarantee for its vinyl fencing, ensuring each customer receives the highest quality of service and support. Our vinyl fences are not only aesthetically pleasing but also come with the assurance of longevity and durability, backed by a comprehensive warranty that secures your investment for years to come.
                    </p>

                    <h2 className={stylesWood.woodFenceContent}>Innovative Vinyl Fencing by GreenView Solutions</h2>
                    <p className={stylesWood.woodFenceInfo}>
                        At GreenView Solutions, innovation meets quality with our vinyl fencing line. Engineered for strength and designed for beauty, our fences resist common issues such as weathering, warping, and fading. The non-toxic materials used in our vinyl fences ensure a safe environment for families and pets, offering a maintenance-free solution that keeps your boundaries pristine without the need for constant upkeep.
                    </p>

                    <h2 className={stylesWood.woodFenceContent}>Customizable Vinyl Fence Options</h2>
                    <p className={stylesWood.woodFenceInfo}>
                        Tailoring to the varied tastes and needs of our clients, GreenView Solutions presents an extensive selection of vinyl fencing styles. Whether you are looking for privacy, picket, or ranch-style fences, our options are customizable to harmonize with your homes architecture and landscape. Our vinyl fences are not just barriers but an enhancement to your propertys curb appeal, promising functionality coupled with elegance.
                    </p>
                </div>
            </div>

            {/* Pic */} {/* Paragraph about GrrerenView Solutions and wood fence*/}
            <section className={styles.fenceInfoSectionContainer}>
                <div className={styles.fenceInfoSectionTitleAndP} >
                    <h2 className={styles.fenceInfoSectionTitleAndP} >Vinyl Fencing Styles</h2>
                    <p className={styles.fenceInfoSectionTitleAndP}>Your paragraph about GreenView Solutions and wood fence goes here.</p>
                </div>
            </section>

            {/* Wood Fence Types  - Make 9 fence types all equal size, need pic on tope and text below about that style*/}
            <section className={styles.fenceTypeCardsContainer}>
                {FenceTypesVinyl.map(fenceType => (
                    <FencingTypeCards
                        key={fenceType.name}
                        name={fenceType.name}
                        image={fenceType.image}
                        description={fenceType.description}
                    />
                ))}
            </section>
            <CallToActionSection />
            <Footer />
        </div>
    )
}