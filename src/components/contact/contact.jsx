import React from "react";
import './contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "470d0380-e9fc-45f4-8179-5c838f57ffee");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        };
        await console.log(result);
      };
    
    return (
        <div className="contact" id="contact">
            <div className="contact_title">
                <h1>Contact Me</h1>
                <img src={theme_pattern} alt="theme_pattern" />
            </div>
            <div className="contactsection">
                <div className="leftcontainer">
                    <h2>Let's connect </h2>
                    <p>I am available for freelance projects, open to contributing to open-source initiatives, and ready to take on new work opportunities. Let's collaborate and create something amazing! Feel free to reach out for any projects or contributions.</p>
                    <div className="contactdetails">
                        <div className="contactdetail"><img src={mail_icon} alt=""/><p>mdebashis268@gmail.com</p></div>
                        <div className="contactdetail"><img src={call_icon} alt=""/><p>+919641978383</p></div>
                        <div className="contactdetail"><img src={location_icon} alt=""/><p>Kolkata, IN700110</p></div>
                    </div>
                    
                </div>
                <form className="rightcontainer" onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" />
                    <label htmlFor="">Your Message</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea> 
                    <button className="contactsubmit">Submit now</button>
                </form>
        </div>
        </div>
    );
};

export default Contact;