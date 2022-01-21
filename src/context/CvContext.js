import { createContext, useState } from "react";

export const CvContext = createContext();

export default function CvContextProvider({ children }) {
    const [generalInfo, setGeneralInfo] = useState([])
    const [eduInfo, setEduInfo] = useState([])
    const [workInfo, setWorkInfo] = useState([])

    return <CvContext.Provider value={{ generalInfo, setGeneralInfo, eduInfo, setEduInfo, workInfo, setWorkInfo }}>
        {children}
    </CvContext.Provider>
}