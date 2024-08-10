import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllSTudents } from "../services/getAllCourse";
import Loader from "../component/Loader/Loader";
import AlertModal from "../component/Modals/AlertModal";
import axios from "axios";
import toastr from "toastr";
import * as XLSX from "xlsx";
import { Modal, Button } from "react-bootstrap";
import "toastr/build/toastr.min.css";

function AllStudents() {
  const [allStudentData, setAllStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleModal, setToggleModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const handleExportClose = () => setShowExportModal(false); // Close the export modal
  const handleExportShow = () => setShowExportModal(true);
  const handleClose = () => setToggleModal(false);

  const exportToExcel = () => {
    const dataToExport = allStudentData.map((certificate) => ({
      RollNo: certificate.rollno,
      CourseName: certificate.course,
      BatchNo: certificate.batchNo,
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Certificates");

    // Generate Excel file and prompt download
    XLSX.writeFile(workbook, "CertificatesData.xlsx");
    handleExportClose(); // Close the export modal after exporting
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await GetAllSTudents();
        setAllStudentData(response.studentsData);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const deleteStudent = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8003/deleteStudent/${id}`
      );
      if (response.data.status === 200) {
        window.location.reload();
      } else {
        toastr.error("Something went wrong");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="bg-white p-3 mb-3 rounded shadow-sm">
        <div className="d-flex justify-content-between align-items-center">
          {" "}
          <h2>All Students</h2>
          <div>
            <Link
              className="btn custom_green custom_btn p-2 px-3"
              to={"/addstudents"}
              style={{ height: "42px" }}
            >
              Add Students
            </Link>
            <button
              className="btn btn-success"
              onClick={handleExportShow}
              style={{ textAlign: "right", marginLeft: "10px", height: "42px" }}
            >
              Export to Excel
            </button>
          </div>
        </div>
        {/* <input type="text" className="form-control mt-4" placeholder="Enter Student Roll Number" style={{ boxShadow: "none", outline: "none" }} /> */}
        {loading ? (
          <Loader />
        ) : (
          <div
            className="mt-4"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <table className="table table-bordered mt-4">
              <thead>
                <tr>
                  <th className="text-center">Roll No</th>
                  <th className="text-center">Student Name</th>
                  <th className="text-center">Course Name</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {allStudentData ? (
                  allStudentData.map((data) => (
                    <tr key={data._id}>
                      <td className="text-center">{data.rollno}</td>
                      <td className="text-center">{data.name}</td>
                      <td className="text-center">{data.course}</td>
                      <td className="text-center">
                        <span
                          className="bg-primary text-white py-1 px-2 rounded-3"
                          style={{ fontSize: "13px" }}
                        >
                          Active
                        </span>
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-danger btn-sm m-1"
                          onClick={() => setToggleModal(true)}
                        >
                          Delete
                        </button>

                        <AlertModal
                          show={toggleModal}
                          handleClose={handleClose}
                          handleDelete={() => deleteStudent(data._id)}
                          body="Do you want to delete this Student?"
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No Data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Modal show={showExportModal} onHide={handleExportClose}>
        <Modal.Header closeButton>
          <Modal.Title>Export Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to export the certificates to Excel?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleExportClose}>
            No
          </Button>
          <Button variant="primary" onClick={exportToExcel}>
            Yes, Export
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AllStudents;
