import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    course: { type: String, required: true },
    date: { type: Date, required: true },
    certificateUrl: { type: String, required: true },
    email: { type: String, required: true },
    cnic: { type: String, default: null },
    batchNo: { type: String, default: null },
    rollno:{type:String,default:null },
    isEmail: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Certificatie = mongoose.model('AllCertificate', UserSchema);

export default Certificatie;

