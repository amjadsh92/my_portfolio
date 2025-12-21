/* eslint-disable */
import "./contact.scss";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";


function Contact({ isDarkMode }) {
 
   const [name, setName] = useState('');
  
   const [email, setEmail] = useState('');

   const [message, setMessage] = useState('')

  return (
    <div  className="contact">
      <div className="contact-title">
          Contact
      </div>
      

      <div className="contact-text">

         Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.

      </div >

      <div className="contact-form">

        <div className="form-title">

        Let's get in touch!
        </div>
        
           <FloatLabel className="name">
                <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="name" > Name </label>
          </FloatLabel>

           <FloatLabel className="email">
                <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="email" > Email </label>
          </FloatLabel>

          <FloatLabel className="message">
          <InputTextarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} cols={30} />
          <label htmlFor="message">Your Message</label>
         </FloatLabel>
         <Button
          className="contact-submit"
          label="Submit"
          severity="info"
          />
 
      </div>

      </div>)
}
export default Contact