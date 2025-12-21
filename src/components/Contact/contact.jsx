/* eslint-disable */
import "./contact.scss";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import * as yup from "yup";

function Contact({ isDarkMode }) {

   
  //  const [name, setName] = useState('');
  //  const [email, setEmail] = useState('');
  //  const [message, setMessage] = useState('')

  const noHtmlRegex = /^[^<>]*$/;

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [redZone, setRedZone] = useState({name:false, email:false, message:false})
   

 const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .matches(noHtmlRegex, "Name must not contain HTML or script characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email is too long")
    .matches(noHtmlRegex, "Email must not contain HTML or script characters"),

  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be at most 1000 characters")
    .matches(noHtmlRegex, "Message must not contain HTML or script characters"),
});



  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: null }));
    setRedZone((prev) => ({ ...prev, [field]: false }) )
  };

  const handleSubmit = async () => {
    try {
      await contactSchema.validate(form, { abortEarly: false });
      setErrors({});

     
      console.log("Form submitted:", form);

    } catch (validationError) {
      const newErrors = {};
      const red = {}
      validationError.inner.forEach((err) => {
        newErrors[err.path] = err.message;
        red[err.path]=true

      });
      setErrors(newErrors);
      setRedZone((prev) => ({...prev,...red}))
    }
  };


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
        
           <FloatLabel className={`name ${redZone.name ? "name-error" : "" }`}>
                <InputText id="name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
                <label htmlFor="name" > Name </label>
          </FloatLabel>
          

           <FloatLabel className={`email ${redZone.email ? "email-error" : "" }`}>
                <InputText id="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
                <label htmlFor="email" > Email </label>
          </FloatLabel>
           

          <FloatLabel className={`message ${redZone.message ? "message-error" : "" }`}>
          <InputTextarea id="message" value={form.message} onChange={(e) => handleChange("message", e.target.value)} rows={5} cols={30} />
          <label htmlFor="message">Your Message</label>
         </FloatLabel>
         <div className="error-block">
          {errors.name && <small className="error">*{' '}{errors.name}</small>}
          {errors.email && <small className="error">*{' '}{errors.email}</small>}
          {errors.message && <small className="error">*{' '}{errors.message}</small>}
          </div>
         <Button
          className="contact-submit"
          label="Submit"
          severity="info"
          onClick={handleSubmit}
          />
 
      </div>

      </div>)
}
export default Contact