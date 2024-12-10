import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './HomePageForm.module.css';

const HomePageForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p6clffh', 'template_uohvude', e.target, 'user_wPYeoaoebNsoGt3GhzLVu')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                // Handle errors here
            });
    };

    return (
        <form onSubmit={sendEmail} className="contactForm">
            <h3>Contact Form</h3>
            <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="input customInput"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="input customInput"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="text"
                name="company_name"
                placeholder="Company Name (if applicable)"
                className="input customInput"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="input customInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                className="input customInput"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button type="submit" className="button">Submit</button>
        </form>
    );
};

export default HomePageForm;
