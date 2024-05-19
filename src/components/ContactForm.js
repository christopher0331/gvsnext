import React from 'react';
import emailjs from 'emailjs-com';
import styles from '../components/ContactUs.module.scss';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            companyName: '',
            email: '',
            phone: '',
            street1: '',
            street2: '',
            city: '',
            state: '',
            zipCode: '',
            fenceType: '',
            installationType: '',
            linearFeet: '',
            projectDetails: '',
            completionTimeframe: '',
            referralSource: '',
            otherProjectDescription: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    sendEmail(event) {
        event.preventDefault();

        const uniqueTimestamp = new Date().getTime();
        const uniqueIdentifier = this.state.email.replace(/[^a-zA-Z0-9]/g, ''); // Sanitizing email to remove special characters
        const externalId = `ext-${uniqueIdentifier}-${uniqueTimestamp}`;

        // First, send the form using emailjs
        emailjs.sendForm('service_p6clffh', 'template_jidzwzw', event.target, 'user_wPYeoaoebNsoGt3GhzLVu')
            .then((result) => {
                console.log('Email sent:', result.text);
                alert('Thank you for your request, we will be in touch soon!');

                // After successful email, send data to Zapier
                const formData = {
                    externalId: externalId,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    companyName: this.state.companyName,
                    email: this.state.email,
                    phone: this.state.phone,
                    street1: this.state.street1,
                    street2: this.state.street2,
                    city: this.state.city,
                    state: this.state.state,
                    zipCode: this.state.zipCode,
                    fenceType: this.state.fenceType,
                    installationType: this.state.installationType,
                    linearFeet: this.state.linearFeet,
                    projectDetails: this.state.projectDetails,
                    completionTimeframe: this.state.completionTimeframe,
                    referralSource: this.state.referralSource,
                    otherProjectDescription: this.state.otherProjectDescription
                };

                fetch('https://hooks.zapier.com/hooks/catch/14518470/3715b4t/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Zapier success:', data);
                        // Optionally, handle any follow-up after sending to Zapier
                    })
                    .catch((error) => {
                        console.error('Zapier error:', error);
                        alert('Failed to send data to Zapier, please check the details.');
                    });

                // Reset form
                this.setState({
                    firstName: '',
                    lastName: '',
                    companyName: '',
                    email: '',
                    phone: '',
                    street1: '',
                    street2: '',
                    city: '',
                    state: '',
                    zipCode: '',
                    fenceType: '',
                    installationType: '',
                    linearFeet: '',
                    projectDetails: '',
                    completionTimeframe: '',
                    referralSource: '',
                    otherProjectDescription: ''
                });

            }, (error) => {
                console.log('Email error:', error.text);
                alert('Failed to send email, please try again.');
            });
    }



    render() {
        return (
            <div className={styles.formBackground}>
                <form onSubmit={this.sendEmail} className={styles.contactForm}>
                    {/* Contact Details */}
                    <div className={styles.formParagraph}>
                        Elevate your surroundings with our quality workmanship, creating a perfect blend of functionality and aesthetics. From sturdy fences that stand the test of time to breathtaking outdoor living spaces, we turn your vision into a reality!
                    </div>
                    <div className={styles.contactDetails}>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <input className={styles.inputField} placeholder="First Name" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                            </label>
                            <label className={styles.inputBox}>
                                <input className={styles.inputField} placeholder="Last Name" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <input className={styles.inputField} placeholder="Company Name (if applicable)" type="text" name="companyName" value={this.state.companyName} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <input className={styles.inputField} placeholder="Email" type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <input className={styles.inputField} placeholder="Phone Number" type="tel" name="phone" value={this.state.phone} onChange={this.handleChange} />
                            </label>
                        </div>
                        <p className={styles.smsConsent}>
                            By providing your phone number, you agree to receive text messages (SMS) from GreenView Solutions. You can unsubscribe at any time by replying STOP. Message and data rates may apply. Message frequency varies.
                        </p>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <input className={styles.inputField} placeholder="Street 1" type="text" name="street1" value={this.state.street1} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <input className={styles.inputField} placeholder="Street 2" type="text" name="street2" value={this.state.street2} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <input className={styles.inputField} placeholder="City" type="text" name="city" value={this.state.city} onChange={this.handleChange} />
                            </label>
                            <label className={styles.inputBox}>
                                <input className={styles.inputField} placeholder="State" type="text" name="state" value={this.state.state} onChange={this.handleChange} />
                            </label>
                            <label className={styles.inputBox}>
                                <input className={styles.inputField} placeholder="ZIP Code" type="text" name="zipCode" value={this.state.zipCode} onChange={this.handleChange} />
                            </label>
                        </div>

                    </div>
                    {/* Service Details */}
                    <div className={styles.serviceDetails}>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <select className={styles.inputField} name="fenceType" value={this.state.fenceType} onChange={this.handleChange}>
                                    <option value="">What type of fencing are you looking for?</option>
                                    <option value="wood">Wood</option>
                                    <option value="vinyl">Vinyl</option>
                                    <option value="chainLink">Chain Link</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                        </div>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <textarea className='inputField' placeholder="Is this a new installation or replacement?" name="installationType" value={this.state.installationType} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <input className={styles.inputField} placeholder="Approximate total linear feet of the project" type="text" name="linearFeet" value={this.state.linearFeet} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <textarea className={styles.inputField} placeholder="Additional project details (e.g., type of fence, wood type, height, number of gates)" name="projectDetails" value={this.state.projectDetails} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <input className={styles.inputField} placeholder="Desired timeframe for project completion" type="text" name="completionTimeframe" value={this.state.completionTimeframe} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <select className={styles.inputField} name="referralSource" value={this.state.referralSource} onChange={this.handleChange}>
                                    <option value="">How did you hear about GreenView Solutions?</option>
                                    <option value="google">Google</option>
                                    <option value="socialMedia">Social Media</option>
                                    <option value="magazine">Magazine</option>
                                    <option value="yardSign">Yard Sign</option>
                                    <option value="vehicles">Vehicles</option>
                                </select>
                            </label>
                        </div>
                        <div className={styles.row}>
                            <label className={styles.inputBox}>
                                <textarea className={styles.inputField} placeholder="Other Project Description" name="otherProjectDescription" value={this.state.otherProjectDescription} onChange={this.handleChange} />
                            </label>
                        </div>
                    </div>

                    <div className={styles.submitButtonBox}>
                        <input className={styles.submitButton} type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;

