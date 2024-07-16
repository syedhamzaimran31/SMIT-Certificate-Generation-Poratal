import React from 'react'
import AddStudentForm from '../component/AddStudentForm/AddStudentForm'
import AddStudentFormButton from '../component/AddStudentFormButton/AddStudentFormButton'

function AddStudents() {
    return (
        <>
            <div className="container py-4 px-3 border rounded-3 bg-white">
                <div className="row">
                    <h2 className='mb-3'>Add Students</h2>
                    <AddStudentForm />
                    <AddStudentFormButton />
                </div>
            </div>
        </>
    )
}

export default AddStudents