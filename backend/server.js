import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());



app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  
  try{

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIEVER_EMAIL,
      subject: "New Contact Form Message",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    
    res.json({name,email:process.env.RECIEVER_EMAIL,message})


  }catch(error){
    console.log(error)
    res.json({error:"An error has occured",message:process.env.RECIEVER_EMAIL})
  }

})  


app.listen(5000, () => console.log("Server running on port 5000"));