//creating routes
import { getStudents, getStudent, addStudent, updateStudent, deleteStudent } from '../controllers/Students.js';
import { Router } from "express";

const router = Router();

router.get('/students',getStudents)

router.get('/student/:id', getStudent)

router.post('/createstudent', addStudent)

router.put('/updatestudent/:id', updateStudent)

router.delete('/deletestudent/:id', deleteStudent)


export default router;