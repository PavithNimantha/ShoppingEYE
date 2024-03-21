import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentId: { 
        type: String, 
        unique: true, 
        required: true 
    },
    
    studentName: {
        type: String,
        required: true
    },

    studentBirthday: {
        type: String,
        required: true
    },

    studentGender: {
        type: String,
        required: true
    },

    dataAddedTime : { 
        type : String,
        required: true 
    }
})

const Student = mongoose.model("Student", studentSchema);

export default Student;