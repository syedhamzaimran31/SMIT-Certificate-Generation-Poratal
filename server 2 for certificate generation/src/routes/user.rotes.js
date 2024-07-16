import express from 'express';
import { login, logout, updateemail, getAdminDatafromDb, sendOtpByEmail, updatepassword, saveCertificate, verifyOtp, addPassword } from '../controllers/user.controller.js';
import { certificategenerate, getAllcertificategenerate, generatedCertificateBaseOnRollNo, DeleteGeneratedCertificates, getallstudentscertified } from '../controllers/certificate.controller.js';
import { AllCourse, getAllCours, deletecourse } from '../controllers/courses.controllers.js';
import { addStudentsData, getAllStudentsData, DeleteGeneratedStudent, getallcoursesenrolledstudents, dummyaddStudentsData } from '../controllers/addStudents.controllers.js';
import { getCertificates, searchIussedCertificatyes, sendEmail } from '../controllers/sendEmail.controllers.js';
const route = express.Router();
//  post
route.post('/saveCertificate', saveCertificate)
route.post('/adminpassword', addPassword)
route.post('/login', login)
route.post('/updatepass', updatepassword)
route.post('/updateemail', updateemail)
route.post('/sendOtp', sendOtpByEmail)
route.post('/verify-otp', verifyOtp)
route.post('/add-Courses', AllCourse)
route.post('/addStudents', addStudentsData)
route.post('/dummyaddStudents', dummyaddStudentsData)
route.post('/generate', certificategenerate)
route.post('/send-Email', sendEmail)
route.post('/generatedCertifcate', generatedCertificateBaseOnRollNo)
route.post('/getallissuedcertificatestudents', getallstudentscertified)
// get
route.get('/getadmindata', getAdminDatafromDb)
route.get('/get-allCourses', getAllCours)
route.get('/getAllStudents', getAllStudentsData)
route.get('/getAllCertificates', getAllcertificategenerate)
route.get("/getallissuedcertificate", getCertificates)
route.get("/serachissuedcertificate", searchIussedCertificatyes)
route.get("/getallcoursesstudent", getallcoursesenrolledstudents)
// delete
route.delete('/delete-Courses/:course_id', deletecourse)
route.delete("/deleteCertificates/:id", DeleteGeneratedCertificates)
route.delete("/deleteStudent/:id", DeleteGeneratedStudent)
export default route

