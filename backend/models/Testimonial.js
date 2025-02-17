const mongoose = require('mongoose')


const testimonial_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    }
})

const Testimonial = mongoose.model('Testimonial', testimonial_schema)
module.exports = Testimonial