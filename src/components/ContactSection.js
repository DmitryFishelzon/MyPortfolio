import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you for your message, ${email}!`);
    };

    return (
        <div className="contact-section">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactSection;