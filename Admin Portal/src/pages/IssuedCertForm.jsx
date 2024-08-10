import React, { useEffect, useState } from "react";
import IssuedCertificateForm from "./IssuedCertificatemodal";
import { GetAllIssuedCertificate } from "../services/getAllCourse";
import Loader from "../component/Loader/Loader";
import SendEmail from "../component/SendEmail/SendEmail";
import PdfButton from "../component/PdfButton/PdfButton";
import Modals from "../component/Modals/Modals";
import * as XLSX from "xlsx";
import { Modal, Button } from "react-bootstrap";

export default function IssuedCertForm() {
  const [allStudentData, setAllStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showExportModal, setShowExportModal] = useState(false);
  const handleExportClose = () => setShowExportModal(false); // Close the export modal
  const handleExportShow = () => setShowExportModal(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await GetAllIssuedCertificate();
        setAllStudentData(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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
  return (
    <div className="bg-white py-5 px-4 mb-3 rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Issued Certificates</h2>
        <div className="d-flex">
          <div className="d-none d-lg-block">
            <IssuedCertificateForm />
            <SendEmail />
          </div>
          <button
            className="btn btn-success"
            onClick={handleExportShow}
            style={{ textAlign: "right", marginLeft:"10px" }}
          >
            Export to Excel
          </button>
          <div className="d-lg-none ">
            <Modals />
          </div>
        </div>
      </div>
      {/* <input type="text" className="form-control mt-4" placeholder="Enter Student Roll Number" style={{ boxShadow: "none", outline: "none" }} /> */}
      <div className="mt-3" style={{ maxHeight: "400px", overflowY: "auto" }}>
        {loading ? (
          <Loader />
        ) : allStudentData ? (
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th className="text-center">Roll No</th>
                <th className="text-center">Course Name</th>
                <th className="text-center">Batch No</th>
                <th className="text-center">Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allStudentData.map((certificate) => (
                <tr key={certificate._id}>
                  <td className="text-center">{certificate.rollno}</td>
                  <td className="text-center">{certificate.course}</td>
                  <td className="text-center">{certificate.batchNo}</td>

                  <td className="d-flex align-items-center justify-content-center">
                    <span
                      className="bg-primary text-white py-1 px-2 rounded-3"
                      style={{ fontSize: "13px" }}
                    >
                      Completed
                    </span>
                  </td>
                  <td className="text-center">
                    <PdfButton pdfUrl={certificate.certificateUrl} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center fw-semibold d-flex align-items-center">
            No data available
          </p>
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
    </div>
  );
}
