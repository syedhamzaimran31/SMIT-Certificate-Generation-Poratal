import { saveAs } from "file-saver"

function Savepdf(pdfURL) {
  const downloadPDF = () => {
    console.log(pdfURL.pdfURL)
    saveAs(pdfURL.pdfURL)
  }

  return (
    <button className="btn btn-light" onClick={downloadPDF}>Download</button>
  )
}

export default Savepdf