import styles from './CustomerTestimonials.module.scss'

export default function CustomerTestimonials() {
  const testimonials = [
    {
      quote: "They transformed our backyard into a stunning oasis. The pergola and concrete work are absolutely beautiful!",
      author: "Sarah M.",
    },
    {
      quote: "Professional, punctual, and exceeded our expectations. Our new outdoor living space is perfect for entertaining.",
      author: "John D.",
    },
    {
      quote: "The attention to detail in both the pergola construction and concrete work was impressive. Highly recommend!",
      author: "Emily R.",
    },
  ]

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <blockquote>{testimonial.quote}</blockquote>
            <cite>- {testimonial.author}</cite>
          </div>
        ))}
      </div>
    </section>
  )
}
