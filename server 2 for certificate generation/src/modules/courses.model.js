import mongoose from "mongoose";

const { Schema } = mongoose

const CouresSchema = new Schema({
    course_name: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const CoursesModel = mongoose.model('Courses', CouresSchema)
export default CoursesModel