require('dotenv').config();

const express = require('express');
const cors = require('cors')
const nodemailer = require('nodemailer');


const app = express();
app.use(cors());
const port = 8000;

// Get email and password from environment variables
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// Create transporter with Gmail service
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
});

app.use(express.json()); // Middleware to parse JSON bodies

app.post('https://portfolio-work-5uccvhp5i-mayank-mishras-projects-7b6c30ae.vercel.app/', (req, res) => {
    const { name, email, text } = req.body;
    console.log(name, email, text)
    const mailOptions = {
        from: email, 
        to: 'mayank0806md@gmail.com', 
        subject: 'New Enquiry',
        text: `You have received a new form submission.\n\n` +
              `Name: ${name}\n` +
              `Email: ${email}\n` +
              `Comment: ${text}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            return res.send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
