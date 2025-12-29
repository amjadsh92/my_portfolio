/* eslint-disable */
import "./contact.scss";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import * as yup from "yup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import {faPaperPlane}  from '@fortawesome/free-solid-svg-icons';


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
  const [dialog, setDialog] = useState({
    visible: false,
    message: "",
  });

  // const [redZone, setRedZone] = useState({name:false, email:false, message:false})

 const sendButton = 
   <div className="send-button">
    
        <FontAwesomeIcon icon={faPaperPlane} className="sendButtonIcon" />
        <span>Send</span>
      
    

   </div>

 const contactSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .test(
    "min-if-not-empty",
    "Name must be at least 2 characters",
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
    "Message must be at least 10 characters",
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
      setDialog({visible:true, message:"Are you sure you want to send this message to Amjad?"})

    //   const response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(form),
    // });

    // if (!response.ok) {
    //   console.log("error occured")
    // }

    // console.log("Email sent successfully");

    // setForm({ name: "", email: "", message: "" });

     
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
          // label="Send"
          label={sendButton}
          severity="info"
          onClick={handleSubmit}
          />

          < LoginResultModal dialog={dialog} setDialog={setDialog} form={form} setForm={setForm} />
 
      </div>

      </div>)
}



function LoginResultModal({ dialog, setDialog, form, setForm }) {
 
    const [isLoading, setIsLoading] = useState(false) 
    const [messageSent, setMessageSent] = useState(false)
    const [errorOcuured, setErrorOccured] = useState(false)

     const dialogHeader = (
  <div className="dialog-header">
    {messageSent && !errorOcuured && (
      <>
        {/* <FontAwesomeIcon className="fa-solid fa-circle-check success-icon" /> */}
        {/* <FontAwesomeIcon icon={byPrefixAndName.fas['circle-check']} /> */}
        <FontAwesomeIcon icon={faCircleCheck} className="circleCheck" />
        <span>Success</span>
      </>
    )}

    {messageSent && errorOcuured && (
      <>
        {/* <FontAwesomeIcon className="fa-solid fa-circle-xmark error-icon" /> */}
        <FontAwesomeIcon icon={faCircleXmark} className="xMark" />
        <span>Failed</span>
      </>
    )}

    {!messageSent && (
      <>
        {/* <FontAwesomeIcon className="fa-solid fa-paper-plane question-icon" /> */}
        <FontAwesomeIcon icon={faPaperPlane} className="paperPlane" />
        <span>Send message?</span>
      </>
    )}
  </div>
);

    async function  sendMessage(){
      try{
      setIsLoading(true)
      // setTimeout(setMessageSent(false))
      const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    console.log(response)

    if (!response.ok) {
      console.log("error occured")
       setIsLoading(false)
       setDialog({...dialog,message:"An error has occured. Try again."})
       setMessageSent(true) 
       setErrorOccured(true)
       
       
    }
     
    if(response.ok){
    setIsLoading(false)
    setDialog({...dialog,message:"Your message has been sent successfully to Amjad."})
    setMessageSent(true)
    console.log("Email sent successfully");
   
    setForm({ name: "", email: "", message: "" });

    } 
      // console.log("Form submitted:", form);
    }catch(error){
    setIsLoading(false)
    setDialog({...dialog,message:"The server is down. Try again later."})
    setMessageSent(true)
    setErrorOccured(true)

    }  
  }

  return (
    <Dialog
      // header={`${messageSent ? ( `${errorOcuured ? "Failed :(" : "Success!"}`) : "Send message?"}`}
      header={dialogHeader}
      visible={dialog.visible}
      className="dialog-login"
      onHide={() => {
           
        setDialog({ ...dialog, visible: false })
        setTimeout(() => setMessageSent(false), 500)
        setTimeout(() => setErrorOccured(false), 500)
        
      
      }}
      footer={
        <div>
          <Button
            label="OK"
            icon={`pi pi-check`}
            // onClick={() => setDialog({ ...dialog, visible: false })}
            onClick={() => {
              setDialog({ ...dialog, visible: false })
              setTimeout(()=> setErrorOccured(false),500)
              setTimeout(() => setMessageSent(false),500)
            } }
            autoFocus
            visible={messageSent ? true : false}
           
          />
          <Button
            label="Yes"
            icon={`pi ${isLoading ? "pi-spin pi-spinner" : "pi-check"}`}
            // onClick={() => setDialog({ ...dialog, visible: false })}
             onClick={sendMessage}
            autoFocus
            visible={messageSent ? false : true}
          />
          <Button
            label="No"
            icon="pi pi-times"
            onClick={() => {
             setDialog({ ...dialog, visible: false })
             setTimeout(()=> setErrorOccured(false), 500)
             setTimeout(() => setMessageSent(false), 500)
            }}
            autoFocus
            visible={messageSent ? false : true}
          />
        </div>
      }
    >
      <DialogContent message={dialog.message} />
    </Dialog>
  );
}

function DialogContent({ message }) {
  return (
    <>
      <div className="dialogContent-login">{message}</div>
    </>
  );
}

export default Contact