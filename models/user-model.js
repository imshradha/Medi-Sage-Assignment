import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    phone_number : Number,
    email : String,
    password : String,
    image : String
})

const user = mongoose.model('User', userSchema)

export default user;
