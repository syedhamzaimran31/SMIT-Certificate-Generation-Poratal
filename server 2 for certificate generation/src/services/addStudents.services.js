
import db from '../modules/index.js'
import generateOtp from '../utils/randomString.util.js'
const { students: Students } = db

const addStudents = async (payload) => {
    try {
        const rollNumber = await generateOtp()
        const savedata = await Students({ ...payload, rollno: rollNumber })
        const saveStudentData = await savedata.save();
        return saveStudentData
    } catch (error) {
        throw error
    }
}

const dummaddStudents = async (payload) => {
    try {
        const payloadWithRollNumbers = payload.map(student => {
            return {
                ...student,
                rollno: generateOtp()
            };
        });

        const savedata = await Students.insertMany(payloadWithRollNumbers);
        return savedata;
    } catch (error) {
        throw error
    }
}

const fetchAllStudentsData = async()=>{
    try {
        const response = await Students.find({}).exec();
        return response
    } catch (error) {
        throw error
    }
}

const getEnrolledData=async(course)=>{
    try {
        const response = await Students.find({course:course})
        return response       
    } catch (error) {
        throw error
    }
}

const deletedStudents =async(id)=>{
    try {
        const response = await Students.deleteOne({ _id: id })
        return response        
    } catch (error) {
        throw error
    }
}

const GetSearchStudets=async(rollnumber)=>{
    try {
        const response = await Students.find({rollno:rollnumber}).exec();
        return response
    } catch (error) {
        throw error
    }
}

export {
    addStudents,
    fetchAllStudentsData,
    dummaddStudents,
    getEnrolledData,
    deletedStudents,
    GetSearchStudets
}