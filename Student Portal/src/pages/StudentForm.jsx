import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import Tabel from '../Components/Tabel/Tabel';
import FormsFields from '../Components/FormsFields/FormsFields';
import { useGlobalState } from '../ContextApi/ContextApi';
import axios from 'axios';

function StudentForm() {
    const { studentCnic, rollno } = useGlobalState()
    const [showTable, setShowTable] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [data, setData] = useState("");

    const validateInputs = () => {
        const isCNICValid = studentCnic.length === 13 && /^\d+$/.test(studentCnic);
        const isRollNoValid = rollno.length === 6 && /^\d+$/.test(rollno);
        setIsButtonEnabled(isCNICValid && isRollNoValid);
    };

    useEffect(() => {
        validateInputs();
    }, [studentCnic, rollno]);
    const Continue = async () => {
        try {
            const response = await axios.post("http://localhost:8003/getallissuedcertificatestudents", {
                rollno: rollno
            });

            const firstObject = response.data; // Get the first object from the response array
            setData(firstObject.data[0]);
            setShowTable(true);
        } catch (error) {
            console.error("ERROR", error.message);
        }
    };
    useEffect(() => {
        setShowTable(false);
    }, []);

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="col-lg-6 col-md-6 col-sm-12 py-5">
                        <div className='mb-4 d-flex justify-content-center mb-2 '>
                            <img src={logo} width={160} />
                        </div>
                        <h4 className='mb-5 text-center text-capatilize'>STUDENT PORTAL GET CERTIFICATE</h4>
                        <FormsFields />
                        <div className='d-grid mt-3'>
                            <button className='btn btn-primary w-100' onClick={Continue} disabled={!isButtonEnabled}>Continue</button>
                        </div>
                        {showTable && (
                            <Tabel data={data}/>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentForm;
