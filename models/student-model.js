import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    id : String, 
    name : String,
    phone_number : Number,
    email : String,
    country : String,
    country_code : Number
})

const student = mongoose.model('Student', studentSchema)

export default student;

// id, name, phone_number, email, country, coutry_code