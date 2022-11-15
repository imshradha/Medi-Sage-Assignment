import studentSchema from '../models/student-model.js'; 
import { isValid, isValidReqBody, isValidEmail, isValidPhone, isValidString, isValidCountryCode, isValidId } from '../validator/valid.js';

export const createStudent = async (req, res) => {
    try {
        const requestBody = req.body;

        const { id, name, phone_number, email, country, country_code } = requestBody;

        if (!isValidReqBody(requestBody)) {
            return res.status(400).send({ status: false, msg: "Please provide Student data" })
        }
        if (!isValid(id)) {
            return res.status(400).send({ message: "Please enter student id" })
        }
        if (!isValidId(id)) {
            return res.status(400).send({ status: false, message: "Invalid student id" });
        }
        if (!isValid(name)) {
            return res.status(400).send({ message: "Please enter student name" })
        }
        if (!isValidString(name)) {
            return res.status(400).send({ status: false, message: "Invalid name : Only string is accepted" });
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
        if (!isValid(country)) {
            return res.status(400).send({ message: "Please enter country" })
        }
        if (!isValidString(country)) {
            return res.status(400).send({ message: "This country is not valid" })
        }
        if (!isValid(country_code)) {
            return res.status(400).send({ message: "Please enter country code" })
        }
        if (!isValidCountryCode(country_code)) {
            return res.status(400).send({ message: "This country code is not valid" })
        }
        
        const newStudent = await studentSchema.create(requestBody);
        return res.status(201).send({ message: "Student data created successfully..", data: newStudent })

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

export const getstudents = async (req, res) => {
    try {
        const students = await studentSchema.find().select({ __v:0, _id:0 });
        return res.status(200).send({message:"Student list", data:students});
    } catch (error) {
        return response.status(500).send({ message: error.message })
    }
}

