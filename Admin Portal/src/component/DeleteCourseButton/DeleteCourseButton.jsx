import React, { useState } from 'react';
import axios from 'axios';
import DeleteModal from '../Modals/AlertModal';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

function DeleteCourseButton({ id }) {
  const [toggleModal, setToggleModal] = useState(false);

  const handleClose = () => setToggleModal(false);

  const handleDelete = async () => {
    handleClose();

    try {
      const deleteCourse = await axios.delete(`http://localhost:8003/delete-Courses/${id}`);
      if (!deleteCourse) {
        return toastr.error("Something went wrong");
      }
      window.location.reload();
    } catch (error) {
      console.error("There was an error deleting the course!", error);
    };
  }
  return (
    <>
      <button className="btn text-danger" style={{ border: "none" }} onClick={() => setToggleModal(true)}>
        <i className="fa-solid fa-trash" />
      </button>
      <DeleteModal show={toggleModal} handleClose={handleClose} handleDelete={handleDelete} body="Do you want to delete this course?" />
    </>
  );
}

export default DeleteCourseButton;
