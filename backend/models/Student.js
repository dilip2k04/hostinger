const mongoose = require('mongoose')

const student_schema = new mongoose.Schema({
    student_name: {
        type: String,
        required: true,
    },
    contact_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    child_grade: {
        type: String,
        required: true,
    },
    prefered_subjects: [
        {
            type: String,
            required: true,
        }
    ]
}, {timestamps: true})


module.exports = mongoose.model('Student', student_schema)