import { createContext, useContext,  useState, } from "react";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)

let GlobalStates = (children) => {
    const [studentCnic, setStudentCnic] = useState('');
    const [rollno, setrollno] = useState("");
    const [error, setError] = useState("");
    
    return <GlobalContext.Provider value={{
        studentCnic, setStudentCnic,
        error, setError,
        rollno, setrollno

    }}>
        {children.children}
    </GlobalContext.Provider>
}

export {
    GlobalStates,
    useGlobalState
}