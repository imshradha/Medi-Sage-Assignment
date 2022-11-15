import express from "express";
import { createStudent, getstudents } from "../controllers/student-controller.js";
import { createUser, getusers, updateuser } from "../controllers/user-controller.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.use('/user', upload.fields([{ name: 'image', maxCount: 1 }]))

//student apis
router.post('/student', createStudent);
router.get('/getstudents', getstudents)

//user apis
router.post('/user', createUser);
router.get('/getusers', getusers)
router.post('/updateuser/:id', updateuser)



export default router;