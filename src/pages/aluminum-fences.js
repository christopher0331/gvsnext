import Header from '../components/Header';
import Footer from '../components/Footer';
import FencingTypeCards from '@/components/FencingTypeCards';
import PicketTypeCard from '@/components/PicketTypeCard';
import FenceTypesAluminum from '../components/FenceTypesAluminum.js';
import PicketStyles from '../components/PicketStyles.js';
import styles from '../components/FencingTypeCards.module.scss';
import stylesWood from '../components/WoodFencesStyles.module.scss';
import Image from 'next/image';
import ServicesSidebar from '@/components/ServicesSideBar';

export default function AluminumFences() {

    return (
        <div>
            {/* Header */}
            <Header />

            <div className={stylesWood.woodFenceContainer}>
                <div>
                    <ServicesSidebar />
                </div>

                <div className={stylesWood.woodFenceInnerContainer}>
                    <h1>GreenView Solutions Aluminum Fencing Guarantee</h1>
                    <p className={stylesWood.woodFenceContent}>
                        GreenView Solutions stands behind the unparalleled warranty of its aluminum fencing. As a leading manufacturer in the industry, our commitment is to support the integrity of our products. Every GreenView Solutions fence is backed by a comprehensive Lifetime Transferable Guarantee, assuring a defect-free product during your ownership, with the promise extending to future property owners.
                    </p>

                    <h2 className={stylesWood.woodFenceContent}>Durable Powder Coating by GreenView Solutions</h2>
                    <p className={stylesWood.woodFenceInfo}>
                        At GreenView Solutions, we pride ourselves on offering a superior range of styles and quality in our aluminum fencing line, featuring SolarShield technology to combat fading and chalking. Adhering to the stringent AAMA 2604 standards, our powder coating process far exceeds the typical AAMA 2603 industry norms, enduring up to 3000 hours of salt spray tests, which is twice the usual resilience. We ensure our aluminum fences receive a full powder coat after assembly for a unified and robust finish, integrating both the fasteners and the coating for enhanced durability.
                    </p>

                    <h2 className={stylesWood.woodFenceContent}>Selecting Your GreenView Solutions Aluminum Fence</h2>
                    <p className={stylesWood.woodFenceInfo}>
                        GreenView Solutions aluminum fencing is proudly crafted in the USA, offering a comprehensive array of styles, colors, and grades to suit any specific need or budget. From the Elite to Standard ranges, every choice is designed to provide optimal fencing solutions. We also cater to unique requests with our Industrial, Talon, Louvered, and Privacy collections, available upon inquiry. Our tastefully designed aluminum fences boast streamlined designs and pristine lines, delivering the final aesthetic touch for diverse outdoor settings.
                    </p>
                </div>
            </div>

            {/* Pic */} {/* Paragraph about GrrerenView Solutions and wood fence*/}
            <section className={styles.fenceInfoSectionContainer}>
                <div className={styles.fenceInfoSectionTitleAndP} >
                    <h2 className={styles.fenceInfoSectionTitleAndP} >Aluminum Fencing Styles</h2>
                    <p className={styles.fenceInfoSectionTitleAndP}>Your paragraph about GreenView Solutions and wood fence goes here.</p>
                </div>
            </section>

            {/* Wood Fence Types  - Make 9 fence types all equal size, need pic on tope and text below about that style*/}
            <section className={styles.fenceTypeCardsContainer}>
                {FenceTypesAluminum.map(fenceType => (
                    <FencingTypeCards
                        key={fenceType.name}
                        name={fenceType.name}
                        image={fenceType.image}
                        description={fenceType.description}
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