import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './TestimonialSection.module.scss';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "Property Manager",
      company: "Denver Heights Apartments",
      quote: "GreenView Solutions has been handling our annual backflow testing for 3 years now. Their technicians are always on time, professional, and thorough. They make compliance easy with their automated reminder system and handle all the paperwork with the city. Highly recommended!",
      image: "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/testimonials/testimonial-1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Homeowner",
      company: "Highlands Ranch",
      quote: "After receiving a notice from my water provider about required backflow testing, I called GreenView Solutions. They explained everything clearly, offered a fair price, and completed the testing efficiently. The technician even showed me how to properly maintain my system between annual tests.",
      image: "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/testimonials/testimonial-2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "David Martinez",
      role: "Facilities Director",
      company: "Denver Medical Center",
      quote: "For a medical facility, water safety is critical. GreenView Solutions understands the importance of reliable backflow prevention and provides exceptional service. Their certified technicians are knowledgeable about healthcare facility requirements and always ensure we remain in full compliance.",
      image: "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/testimonials/testimonial-3.jpg",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <p className={styles.sectionSubtitle}>Trusted by homeowners and businesses throughout Denver</p>
        
        <div className={styles.testimonialSlider}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`${styles.testimonialCard} ${index === activeIndex ? styles.active : ''}`}
            >
              <div className={styles.quote}>
                <span className={styles.quoteIcon}>&quot;</span>
                <p>{testimonial.quote}</p>
              </div>
              
              <div className={styles.author}>
                <div className={styles.authorImage}>
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                  />
                </div>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}, {testimonial.company}</p>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`${styles.star} ${i < testimonial.rating ? styles.filled : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
