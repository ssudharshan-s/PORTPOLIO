// src/components/ContactAss.js
import React, { useState } from "react";
import './ContactAss.css';
import contactImg from '../Assets/contact-img.svg';

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

const ContactAss = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ type: "", message: "" });

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedback({ type: "success", message: data.message || "Message sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFeedback({ type: "error", message: data.message || "Something went wrong. Please try again later." });
      }
    } catch (err) {
      console.error("Frontend error:", err);
      setFeedback({ type: "error", message: "Network/server error. Please try again later." });
    }
  };

  return (
    <div className="con-container">
      <h2 className="con-title"><span>Get</span> In Touch</h2>
      <div className="con-info">
        <div className="con-left">
          <img src={contactImg} alt="Contact" />
        </div>
        <div className="con-right">
          <form onSubmit={handleSubmit} className="con-form">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject (Optional)" value={formData.subject} onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>

            {feedback.message && (
              <div className={`form-feedback ${feedback.type}`}>{feedback.message}</div>
            )}

            <button className="con-button" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactAss;
