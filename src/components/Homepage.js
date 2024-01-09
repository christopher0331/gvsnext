import React from 'react';

const Homepage = () => {
    return (
        <div className="homepage-container" style={{ backgroundColor: 'white', padding: '2em' }}>
            {/* Section 1: Introduction or About */}
            <section className="intro-section" style={{ marginBottom: '2em' }}>
                <h2>Welcome to Our Fencing Services</h2>
                <p>We provide high-quality fencing solutions for residential and commercial properties.</p>
            </section>

            {/* Section 2: Services */}
            <section className="services-section" style={{ marginBottom: '2em' }}>
                <h2>Our Services</h2>
                <p>Explore our range of services including vinyl fences, wood fences, chain link fences, and more.</p>
                {/* Additional content such as service listings or images can go here */}
            </section>

            {/* Section 3: Testimonials or Client Feedback */}
            <section className="testimonials-section" style={{ marginBottom: '2em' }}>
                <h2>Client Testimonials</h2>
                <p>Read what our clients have to say about our exceptional fencing services.</p>
                {/* Testimonials or reviews can be added here */}
            </section>

            {/* Section 4: Call to Action */}
            <section className="cta-section">
                <h2>Get in Touch</h2>
                <p>Contact us today for a free consultation and quote for your fencing needs.</p>
                <button style={{ padding: '1em 2em', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Contact Us</button>
            </section>
        </div>
    );
};

export default Homepage;
