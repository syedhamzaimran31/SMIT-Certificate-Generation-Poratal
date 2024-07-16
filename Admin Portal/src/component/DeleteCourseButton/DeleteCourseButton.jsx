import React from 'react'
import axios from 'axios'

function DeleteCourseButton({id}) {
    const deleteCourse=async()=>{
        const deleteCourse = await axios.delete(`http://localhost:8003/delete-Courses/${id}`)
        if(!deleteCourse){
            return alert("something wemt wrong")
        }
        window.location.reload()
    }
  return (
    <>
        <button className="btn text-danger" style={{border:"none"}} onClick={deleteCourse}><i className="fa-solid fa-trash" />
        </button>
    </>
  )
}

export default DeleteCourseButton