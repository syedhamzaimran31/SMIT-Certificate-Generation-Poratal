import { useGlobalState } from "../../ContextApi/ContextApi"

function FormsFields() {
    const {studentCnic, setStudentCnic,
        rollno, setrollno}=useGlobalState()
    return (
        <>
            <p className="fw-semibold">CNIC (Which you provided during form submission):</p>
            <div className='form-floating mb-3 '>
                <input
                    type="text"
                    className="form-control"
                    id="cnic"
                    placeholder="Enter your CNIC"
                    style={{ boxShadow: "none", outline: "none" }}
                    value={studentCnic}
                    onChange={(e)=>{setStudentCnic(e.target.value)}}
                />
                <label htmlFor="cnic">Enter Your CNIC</label>
            </div>
            <p className="fw-semibold">Enter Your RollNo:</p>
            <div className='form-floating mb-3 '>
                <input
                    type="text"
                    className="form-control"
                    id="rollNo"
                    placeholder="Enter your RollNO"
                    style={{ boxShadow: "none", outline: "none" }}
                    value={rollno}
                    onChange={(e)=>{setrollno(e.target.value)}}
                />
                <label htmlFor="rollNo">Enter Your RollNo</label>
            </div>
        </>
    )
}

export default FormsFields