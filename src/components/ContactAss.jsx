import React,{useState} from "react";
import './ContactAss.css';

import contactImg from '../Assets/contact-img.svg';

const ContactAss = () => {


    const [formData, setFormData] = useState({
        name: "",
        email:"",
        subject:"",
        message:"",
    });

    const [feedback, setFeedback] = useState({type:"", message:""});

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };


    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await fetch("https://portpolio-s.onrender.com/api/contact",{
                method: "POST",

                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            const data=await response.json();

            if(response.ok) {
                setFeedback({ type: "success", message: data.message || "Message sent successfully",});
                setFormData({ name:"", email:"",subject:"",message:""});
            }
            else{
                setFeedback({ type:"error", message: data.message || "Something went wrong. Please try again later.",});
            }
        } catch (error) {
            console.error("Error:",error);
            setFeedback({ type:"error", message:"Something went wrong. Please try again later.",
            });
        }
    };





    return(
        <div className="con-container">
            <h2 className="con-title"><span>Get</span> In Touch</h2>

            <div className="con-info">
                <div className="con-left">
                    <img src={contactImg } alt=""/>
                </div>
                <div className="con-right">
                   <form onSubmit={handleSubmit} className="con-form">
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                        <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            
                        {/* Display Feedback message */}

                        {feedback.message && (
                           <div className={`form-feedback ${feedback.type}`}>
                              {feedback.message}
                           </div>
                        )}

                        <button className="con-button" type="submit">Send Message</button>
            
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactAss;