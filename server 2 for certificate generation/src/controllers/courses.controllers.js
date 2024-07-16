import { findCourse, saveCourse, getAllCourse, deleteCourse } from "../services/courses.services.js";



const AllCourse = async (req, res) => {
    try {
        const { course } = req.body;
        const findCours = await findCourse(course)
        if (findCours) return res.status(400).json({ status: 400, message: "Course Already Exit Please Change The Name" })
        const courseSave = await saveCourse(course)
        if (!courseSave) return res.status(400).json({ message: "something went wrong" })
        console.log(course)
        return res.status(200).json({ status: 200, message: "success", courses: courseSave })
    } catch (error) {
        return res.status(400).json({ status: 400, message: "something went wrong", error: error.message })
    }
}

const getAllCours = async (req, res) => {
    try {
        const getcourses = await getAllCourse()
        if(!getcourses || getcourses.length === 0)return res.status(404).json({ status: 404, message: "data not found" })
        return res.status(200).json({ status: 200, message: "success", getcourses })
    } catch (error) {
        return res.status(500).json({ message: "Failed to add course",errormessage:error.message})
    }
}

const deletecourse = async (req, res) => {
    try {
        const course_id = req.params.course_id;
        const deleCour = await deleteCourse(course_id)
        if (!deleCour) {
            return res.status(404).json({ message: 'Course not found' });
        }

        return res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to delete course',errormessage:error.message });
    }
}


export {
    AllCourse,
    getAllCours,
    deletecourse
}