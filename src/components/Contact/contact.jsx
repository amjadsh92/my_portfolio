/* eslint-disable */
import "./contact.scss";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";


function Contact({ isDarkMode }) {
 
   const [name, setName] = useState('');

  return (
    <div  className="contact">
      <div className="contact-title">
          Contact
      </div>
      <div className="contact-subtitle">

        Let's get in touch


      </div>

      <div className="contact-text">

         Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.

      </div >

      <div className="contact-form">
        
           <FloatLabel className="username">
                <InputText id="username" value={name} onChange={(e) => setName(e.target.value)} />
                <label > Username </label>
          </FloatLabel>
 
      </div>

      </div>)
}
export default Contact