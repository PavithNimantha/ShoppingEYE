import moment from "moment-timezone";
import Student from "../models/Student.js";
import Counter from "../models/Counter.js";

export const getStudents = (req, res, next) => { //fetch students
        Student.find()
        .then(students => {
            res.status(200).json(students)
        })
        .catch(error => {
            res.status(500).send({status: "Error with get student", error: error.message});
        })
    }

export const addStudent = async (req,res,next) =>{ //add new students

    try{
        const currentDateTime = moment().tz('Asia/Colombo'); //data creating time
        async function generateStudentId() {

            try { //creating unique Id
                const studentCounterDoc = await Counter.findOneAndUpdate({ entity: 'Student' }, { $inc: { count: 1 } }, { new: true,    upsert: true });
                return `S${studentCounterDoc.count.toString().padStart(5, '0')}`;
            } catch (error) {
              console.error('Error fetching student count:', error.message);
            }
          }
      
        const {name, birthday, gender} = req.body

        const studentId = await generateStudentId()

        const student = new Student ({
            studentId,
            studentName: name,
            studentBirthday: birthday,
            studentGender: gender,
            dataAddedTime: currentDateTime
        })

        await student.save()
            res.json({status: "new student added", student})

    }catch (error) {

        console.error('Error adding student:', error.message);

        res.status(500).json({ status: "Internal server error", error: error.message });
      }
    }

export const updateStudent = async (req,res,next) =>{ //update students
    try{  
        let studentId = req.params.id;

        const {name, birthday, gender} = req.body;

        const updateStudent = {
            studentName: name,
            studentBirthday: birthday,
            studentGender: gender
        }

        await Student.findByIdAndUpdate(studentId, updateStudent)

        res.status(200).send({status: "Student Updated",student})

    }catch(error) {

        console.error('Error adding student:', error.message);
        res.status(500).send({status: "Error with update student", error: error.message});
      }
    }

export const deleteStudent = async (req,res,next) =>{ //delete students

    let studentId = req.params.id;

    await Student.findByIdAndDelete(studentId)
    .then((student) => {
        res.status(200).send({status: "Student Deleted", student});
    }).catch((error) => {
        res.status(500).send({status: "Error with delete student", error: error.message});
    })
   }

export const getStudent = async (req,res,next) =>{ //fetch single students by Id

    let studentId = req.params.id;
    
    await Student.findById(studentId)
    .then((student) => {
        res.status(200).json(student)
    }).catch((error) => {
        res.status(500).send({status: "Error with get student", error: error.message});
    })
   }
