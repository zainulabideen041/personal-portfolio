const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zainulabideen4578@gmail.com', // Your email address
    pass: 'your-password' // Your email password
  }
});

// API endpoint to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'zainulabideen4578@gmail.com', // Your email address
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Something went wrong.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
