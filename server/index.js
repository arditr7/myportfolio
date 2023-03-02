const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", () => {
  // resizeBy.send("welcome to my form");
});

app.post("/api/forma", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: process.env.USER_ID,
      pass: process.env.USER_PASS,
    },
  });

  let mailOptions = {
    from: data.email,
    to: "arditramadani78@gmail.com",
    subject: `Message from ${data.name}`,
    html: `

    <h3>Informations</h3>
    <ul>
      <li>Name: ${data.name} </li>
      <li>Email: ${data.email}</li>
      <li>Phone: ${data.phone}</li>
      <li>Message: ${data.message}</li>  
    </ul>

    <h3>Message</h3> 
    <p>${data.message}</p>
    `,
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
  });

  smtpTransport.close();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server starting at port ${PORT}`);
});
