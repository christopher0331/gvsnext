import React from 'react';
import './Hero.scss';
import emailjs from 'emailjs-com';

function Hero({ title = '', description = '', features = [] }) {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p6clffh', 'template_1q52bs5', e.target, 'user_wPYeoaoebNsoGt3GhzLVu')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <div className="hero-container">
            <div className="hero-overlay"></div>

            <div className="hero-content">
                {title && <h1>{title}</h1>}
                {description && <p>{description}</p>}
                {features.length > 0 && (
                    <ul className="features">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="contact-form">
                <h2>GET IN TOUCH WITH US</h2>
                <form onSubmit={sendEmail}>
                    <div style={{ display: 'flex', gap: '10px', flexDirection: 'row' }}>
                        <input type="text" name="first_name" placeholder="First Name *" required />
                        <input type="text" name="last_name" placeholder="Last Name *" required />
                    </div>
                    <input type="email" name="email" placeholder="Email *" required />
                    <input type="tel" name="phone_number" placeholder="Phone *" required />
                    <input type="text" name="address" placeholder="Address *" required />
                    <select name="referral_source" required style={{ color: 'black' }}>
                        <option value="">How did you hear about us? *</option>
                        <option value="google">Google</option>
                        <option value="social-media">Social Media</option>
                        <option value="yard-sign">Yard Sign</option>
                        <option value="referral">Referral</option>
                        <option value="google-maps">Google Maps</option>
                        <option value="the-home-mag">The Home Mag</option>
                        <option value="quality-connections">Quality Connections</option>
                    </select>
                    <textarea
                        name="description"
                        placeholder="Description (optional)"
                        rows="2"
                        style={{ resize: 'vertical', maxHeight: '100px' }}
                    />
                    <button type="submit">Get a Fence Quote</button>
                </form>
            </div>
        </div>
    );
}

export default Hero;