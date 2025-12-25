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

  const [buttonPressed, setButtonPressed] = useState(false)

  // const [redZone, setRedZone] = useState({name:false, email:false, message:false})
   

 const contactSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .test(
    "min-if-not-empty",
    "Name must be at least 10 characters",
    (value) => {
      if (!value) return true; // required handles empty
      return value.length >= 2;
    }
  )
    // .min(2, "Name must be at least 2 characters")
    .max(40, "Name must be at most 50 characters")
    .matches(
      /^[a-zA-Z\s'-]+$/,
      {message: "Name can only contain letters and spaces",
       excludeEmptyString: true
      } 
    )
    .matches(noHtmlRegex, "Name must not contain HTML or script characters"),

  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email is too long")
    .matches(noHtmlRegex, "Email must not contain HTML or script characters"),

  message: yup
    .string()
    .trim()
    .required("Message is required")
     .test(
    "min-if-not-empty",
    "Name must be at least 10 characters",
    (value) => {
      if (!value) return true; // required handles empty
      return value.length >= 10;
    }
  )
    // .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be at most 1000 characters")
    .matches(noHtmlRegex, "Message must not contain HTML or script characters"),
});


const validateField = async (field, value) => {
    try {
      await contactSchema.validateAt(field, {
        ...form,
        [field]: value,
      });

      setErrors((prev) => ({ ...prev, [field]: null }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [field]: err.message }));
    }
  };



  const handleChange = (field, value) => {
    // setForm((prev) => ({ ...prev, [field]: value }));
    // setErrors((prev) => ({ ...prev, [field]: null }));
    // setRedZone((prev) => ({ ...prev, [field]: false }) )
    setForm((prev) => ({ ...prev, [field]: value }));
    buttonPressed ? validateField(field, value) : "";
  };

  const handleSubmit = async () => {
    try {
      await contactSchema.validate(form, { abortEarly: false });
      setErrors({});
      setButtonPressed(true)

      const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      console.log("error occured")
    }

    console.log("Email sent successfully");

    setForm({ name: "", email: "", message: "" });

     
      // console.log("Form submitted:", form);

    } catch (validationError) {
      const newErrors = {};
      // const red = {}
      validationError.inner.forEach((err) => {
        newErrors[err.path] = err.message;
        // red[err.path]=true

      });
      setErrors(newErrors);
      setButtonPressed(true)
      // setRedZone((prev) => ({...prev,...red}))
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
         <div className="name-block">     
           <FloatLabel className={`name ${errors.name ? "name-error" : "" }`}>
                <InputText id="name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
                <label htmlFor="name" > Name </label>
          </FloatLabel>
          {errors.name && <small className="error">{errors.name}</small>}
        </div>  
          <div className="email-block">
           <FloatLabel className={`email ${errors.email ? "email-error" : "" }`}>
                <InputText id="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
                <label htmlFor="email" > Email </label>
          </FloatLabel>
          {errors.email && <small className="error">{errors.email}</small>}
          </div>
          <div className="message-block">
          <FloatLabel className={`message ${errors.message ? "message-error" : "" }`}>
          <InputTextarea id="message" value={form.message} onChange={(e) => handleChange("message", e.target.value)} rows={8} cols={30} />
          <label htmlFor="message">Your message</label>
         </FloatLabel>
         {errors.message && <small className="error">{errors.message}</small>}
         </div>
         {/* <div className="error-block"> */}
          {/* {errors.name && <small className="error">*{' '}{errors.name}</small>}
          {errors.email && <small className="error">*{' '}{errors.email}</small>} */}
          
          {/* </div> */}
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