import React from 'react'
import printJS from 'print-js'
function Printpdf() {
    const printUrl = "https://cdn-icons-png.flaticon.com/512/2165/2165004.png"
    function printpdf() {
        printJS({
            printable : printUrl,
            type : "pdf",
            showModal : true,
            modalMessage : "Printing....."
        })
        console.log("Printing......")
    }
  return (
    <div>
        <button onClick={printpdf}>pdf print</button>
    </div>
  )
}

export default Printpdf