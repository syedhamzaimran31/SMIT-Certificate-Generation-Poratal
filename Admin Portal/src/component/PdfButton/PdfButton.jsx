import React from 'react'

function PdfButton({pdfUrl}) {
  return (
    <>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
        <button className="btn btn-success btn-sm m-1">View Certificate</button>
        </a>
    </>
  )
}

export default PdfButton