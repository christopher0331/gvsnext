// Import your SCSS module at the top of your file
import styles from './InfoSection.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const InfoSection = () => {
    return (
        <div className={styles['info-section-container']}>

            <div className={styles.container}>
                
                <div className={styles['image-and-text']}>

                    <div className={styles['info-section-collage']}>
                        <Image
                            src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/Untitled+design+(5).png"
                            alt="info-section-truck-image"
                            quality={100}
                            height={1000}
                            width={1000}
                            style={{ zIndex: 1550 }}
                        />
                    </div>

                    <div className={styles['title-and-text']}>
                        <h2 className={styles['section-title']}>About Us</h2>
                        <p className={styles['section-subtitle']}>&quot;Colorado&apos;s Most Trusted Outdoor Living Contractor&quot;</p>
                        <p className={styles['info-p-section']}>GreenView Solutions elevates your home with luxurious outdoor living experiences. Immerse yourself in elegance and comfort in your own backyard, where every moment becomes a special memory.</p>
                    </div>
                </div>

                <div className={styles['fencing-options']}>
                    {/* Buttons and other content can be added here, with className applied similarly */}
                </div>


            </div>
        </div>
    );
};

export default InfoSection;
