import userSchema from '../models/user-model.js';
import { isValid, isValidReqBody, isValidEmail, isValidPassword, isValidPhone, isValidString } from '../validator/valid.js';

export const createUser = async (req, res) => {
    try {
        const requestBody = req.body;

        const { firstname, lastname, phone_number, email, password } = requestBody;

        const image = req.files['image'][0].filename;

        if (!isValidReqBody(requestBody)) {
            return res.status(400).send({ status: false, msg: "Please provide user data" })
        }
        if (!isValid(firstname)) {
            return res.status(400).send({ message: "Please enter firstname" })
        }
        if (!isValidString(firstname)) {
            return res.status(400).send({ status: false, message: "Invalid firstname : Only string is accepted" });
        }
        if (!isValid(lastname)) {
            return res.status(400).send({ message: "Please enter lastname" })
        }
        if (!isValidString(lastname)) {
            return res.status(400).send({ status: false, message: "Invalid lastname : Only string is accepted" });
        }
        if (!isValid(phone_number)) {
            return res.status(400).send({ message: "Enter the phone number" })
        }
        if (!isValidPhone(phone_number)) {
            return res.status(400).send({ message: "This phone is not a valid" })
        }
        if (!isValid(email)) {
            return res.status(400).send({ message: "Please enter the email" })
        }
        if (!isValidEmail(email)) {
            return res.status(400).send({ message: "This email is not valid" })
        }
        if (!isValid(password)) {
            return res.status(400).send({ message: "Please enter password" })
        }
        if (!isValidPassword(password)) {
            return res.status(400).send({ message: "This password is not valid" })
        }
        if (!isValid(image)) {
            return res.status(400).send({ message: "Please enter image" })
        }

        const userData = {
            firstname : firstname, 
            lastname : lastname, 
            phone_number : phone_number,
            email : email,
            password : password,
            image : image
        }

        const newUser = await userSchema.create(userData);
        return res.status(201).send({ message: "User data created successfully..", data: newUser })

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

export const getusers = async (req, res) => {
    try {
        const users = await userSchema.find().select({ __v:0, _id:0 });
        return res.status(200).send({message:"User list", data:users});
    } catch (error) {
        return response.status(500).send({ message: error.message })
    }
}

export const updateuser = async (req, res) => {
    try {
        const id = req.params.userId;
        const updateUser = await userSchema.findByIdAndUpdate({id: id}, { $set: { image: req.files.image}} ,{new:true})({ __v:0, _id:0 });
        return res.status(200).send({message:"Updated User", data:updateUser});
    } catch (error) {
        return response.status(500).send({ message: error.message })
    }
}