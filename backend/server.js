import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());



app.post("/api/contact", async (req, res) => {
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

    
    // res.json({name,email:process.env.RECIEVER_EMAIL,message})

     res.status(200).json({ success: true });

  }catch(error){
    console.log(error)
    res.status(500).json({error:"An error has occured"})
  }

})  


app.listen(3002, () => console.log("Server running on port 3002"));