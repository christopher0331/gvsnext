import { useState } from 'react';
import styles from './ReviewsSections.module.css'; // Import the CSS module


const Testimonial = ({ review, author, location }) => {
    return (
        <div className={styles.testimonial}>
            <div className={styles.stars}>
                {'★★★★★'}
            </div>
            <p className={styles.review}>{review}</p>
            <div className={styles.authorInfo}>
                <span className={styles.author}>{author}</span>,
                <span className={styles.location}>{location}</span>
            </div>
        </div>
    );
};

const Testimonials = ({ testimonials }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!testimonials || testimonials.length === 0) {
        return <div>No testimonials available</div>;
    }

    const goToIndex = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.testimonialsContainer}>
            <div style={{ color: 'black', display: 'flex', justifyContent: 'center', fontSize: '3rem', fontFamily: 'Courier New' }}>
                Testimonials
            </div>
            <div className={styles.navigation}>
                <button className={styles.navButton} onClick={() => goToIndex(activeIndex - 1 >= 0 ? activeIndex - 1 : testimonials.length - 1)}>&lt;</button>
                <Testimonial {...testimonials[activeIndex]} />
                <button className={styles.navButton} onClick={() => goToIndex((activeIndex + 1) % testimonials.length)}>&gt;</button>
            </div>
            <div className={styles.dotsContainer}>
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                        onClick={() => goToIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};


export default Testimonials;


