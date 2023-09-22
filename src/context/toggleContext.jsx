/* eslint-disable react/prop-types */
import { createContext, useState} from "react";


export const ToggleContext = createContext()


export const ToggleProvider = ({children}) => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false)


    return (
        <ToggleContext.Provider value = {{isSidebarOpen, setIsSidebarOpen}}>
                {children}
        </ToggleContext.Provider>
    )
}