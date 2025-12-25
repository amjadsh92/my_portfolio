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

  res.json({name,email,message})

})  


app.listen(5000, () => console.log("Server running on port 5000"));