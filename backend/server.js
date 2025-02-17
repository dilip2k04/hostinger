const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/Student');
const Testimonial = require('./models/Testimonial.js')
const dotenv = require('dotenv')
const app = express();

app.use(express.json());

dotenv.config();

const cors = require("cors");
app.use(cors({ origin: process.env.FRONTEND_URL})); // Adjust to your frontend port

// 
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/student_db';

mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION FAILED!'));
db.once('open', () => {
    console.log('DATABASE CONNECTED');
});


app.get('/hello', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

app.get('/get-feedbacks', async(req, res) => {
    try {
        const testimonials = await Testimonial.find({});
        res.json({
            testimonials: testimonials
        });
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
})



app.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        const student = new Student({
            student_name: req.body.student_name,
            contact_number: req.body.contact_number,
            email: req.body.email,
            child_grade: req.body.child_grade,
            prefered_subjects: req.body.prefered_subjects.split(',').map(subject => subject.trim())
        });
        await student.save();
        console.log(student)
        res.json({
            message: 'Student Registered Successfully!'
        });
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});