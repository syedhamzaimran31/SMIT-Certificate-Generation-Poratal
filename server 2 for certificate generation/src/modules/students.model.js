import mongoose from "mongoose";

const { Schema } = mongoose;

const StudentsSchema = new Schema({
    name: { type: String, required: true,lowercase: true },
    course: { type: String, required: true,lowercase: true },
    date: { type: Date, required: true,lowercase: true },
    email: { type: String, required: true,lowercase: true },
    cnic: { type: String, default: null },
    batchNo: { type: String, default: "BATCH 11",lowercase: true },
    rollno:{type:String,default:null },
    courseIsComplete: {
        type: Boolean,
        default: false
    },
    isEmail: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const StudentsModel = mongoose.model('Students', StudentsSchema);

export default StudentsModel;

