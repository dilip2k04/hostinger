const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/Student');
const app = express();

app.use(express.json());

const dbUrl =  process.env.DB_URL || 'mongodb://localhost:27017/student_db';

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

app.post('/register', async(req, res) => {
    try{
        const student = new Student(req.body);
        await student.save();
        res.status(200).json({
            message: 'Student Registered Successfully!'
        });
    }catch(err){
        res.status(500).json({
            message: e.message
        });
    }
})

  app.listen( 3000,  () => {
    console.log('Server running on port 3000');
  });