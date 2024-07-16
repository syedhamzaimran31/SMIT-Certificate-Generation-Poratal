import db from '../modules/index.js'
const { courses: Courses } = db


const saveCourse = async (course) => {
    try {
        const savCourse = await Courses({ course_name: course })
        const save = await savCourse.save();
        return save
    } catch (error) {
        throw error
    }

}

const findCourse = async (course) => {
    try {
        const findCourseByName = await Courses.findOne({ course_name: course })
        return findCourseByName
    } catch (error) {
        throw error
    }
}

const getAllCourse=async()=>{
    try {
        const getAllCourses = await Courses.find({}).exec()
        return getAllCourses
    } catch (error) {
        throw error
    }
}

const deleteCourse=async(id)=>{
    try {
        const dC = await Courses.findByIdAndDelete(id)
        return dC
    } catch (error) {
        throw error
    }
}



export {
    saveCourse,
    findCourse,
    getAllCourse,
    deleteCourse
}