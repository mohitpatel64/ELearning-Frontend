import './Contact.css';
import axios from 'axios'
import {apiurlcontact} from '../../ApiUrl'
import { useState } from 'react';

function Contact() {
     const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[subject,setSubject]=useState("")
    const[message,setMessage]=useState("")
    const[output,setOutput]=useState("")

    const buttonHandle=(e)=>{
        e.preventDefault();
        //alert();
        const contactDetails={"name":name,"email":email,"subject":subject,"message":message};
        
        axios.post(apiurlcontact+"save",contactDetails).then((res)=>{
            // setOutput("Data Saved");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            alert("Message sent successfully!");
        }).catch((e)=>{
            console.log(e)
            alert("Msg Not sent")
        })

    }

    return (
        <section className="contact-section">

            <div className="contact-container">

                {/* LEFT - MAP */}
                <div className="contact-map-card">

                    <div className="contact-card-heading">
                        <div className="contact-icon">📍</div>

                        <div>
                            <h2>Our Location</h2>
                            <p>We'd love to meet you. Find us on the map.</p>
                        </div>
                    </div>

                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps?q=Indore,Madhya+Pradesh,India&output=embed"
                            title="Indore Location"
                            loading="lazy"
                        ></iframe>
                    </div>

                </div>


                {/* RIGHT - FORM */}
                <div className="contact-form-card">

                    <div className="contact-card-heading">
                        <div className="contact-icon">✉️</div>

                        <div>
                            <h2>Send Us a Message</h2>
                            <p>We'll get back to you as soon as possible.</p>
                        </div>
                    </div>


                    <form onSubmit={buttonHandle}>

                        <div className="contact-input-row">

                            <input
                                type="text"
                                placeholder="Your Name" required
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />

                            <input
                                type="email"
                                placeholder="Your Email" required
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />

                        </div>


                        <input
                            type="text"
                            placeholder="Subject"  required
                            value={subject}
                            onChange={(e)=>setSubject(e.target.value)}
                        />


                        <textarea
                            placeholder="Your Message" required
                            rows="6"
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                        ></textarea>


                        <button type="submit">
                            ✈ Send Message
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Contact;