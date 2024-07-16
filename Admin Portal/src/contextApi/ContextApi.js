import { createContext, useContext, useEffect, useState, } from "react";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)

let GlobalStates = ({ children }) => {
    const [isUser, setIsUser] = useState(true);
    const [isUserToken, setIsUserToken] = useState("");
    const [otpVerificationEmail, setOtpVerificationEmail] = useState("");
    const [studentName, setStudentName] = useState('');
    const [courseName, setCourseName] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [studentCnic, setStudentCnic] = useState('');
    const [batchNo, setBatchNo] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [allCourse, setAllCourses] = useState([]);
    const [issuedBatchNo, setIssuedBatchNo] = useState("");
    const [issuedCourseName, setIssuedCourseName] = useState("");
    const [rollno, setrollno] = useState("");
    const [error, setError] = useState("");
    const [totalCertificaet, setTotalCertificate] = useState("")
    const [adminData, setAdminData] = useState("")

    useEffect(() => {
        (async () => {
            const getToken = await localStorage.getItem("token")
            if (!getToken) {
                setIsUser(false)
            }

        })()

    }, [])
    return <GlobalContext.Provider value={{
        isUser, setIsUser,
        isUserToken, setIsUserToken,
        otpVerificationEmail, setOtpVerificationEmail,
        studentName, setStudentName,
        courseName, setCourseName,
        currentDate, setCurrentDate,
        studentEmail, setStudentEmail,
        studentCnic, setStudentCnic,
        batchNo, setBatchNo,
        rollNo, setRollNo,
        allCourse, setAllCourses,
        issuedBatchNo, setIssuedBatchNo,
        issuedCourseName, setIssuedCourseName,
        error, setError,
        totalCertificaet, setTotalCertificate,
        adminData, setAdminData

    }}>
        {children}
    </GlobalContext.Provider>
}

export {
    GlobalStates,
    useGlobalState
}