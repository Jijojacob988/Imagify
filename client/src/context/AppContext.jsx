import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user,setUser] = useState(null);
    const [showLogin,setShowLogin] = useState(false);
    const [token,setToken] = useState(localStorage.getItem('token'))

    const [credit, setCredit] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const loadCreditsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/credits', {
                headers: {
                    Authorization: `Bearer ${token}`  // Correct way to send token
                }
            });
    
            if (data.success) {
                setCredit(data.credits);
                setUser(data.user);
            }
        } catch (error) {
            console.error("Error loading credits:", error.response?.data?.message || error.message);
            toast.error(error.response?.data?.message || "Failed to load credits");
        }
    };

    const generateImage = async (prompt)=>{
         try {
           const {data} await axios.post(backendUrl + '/api/image/generate-image', {prompt}, {headers: {token}})
           
           if(data.success){
            loadCreditsData()
           }
         } catch (error) {
            toast.error(error.message)
         }
    }
    
    const logout = ()=>{
        localStorage.removeItem('token');
        setToken('')
        setUser(null)
    }

    useEffect(()=>{
        if(token){
            loadCreditsData()
        }
    },[token])

    const value = {
        user,setUser,showLogin,setShowLogin,backendUrl,token,setToken,credit,setCredit,loadCreditsData,logout
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}

        </AppContext.Provider>
    )
}
export default AppContextProvider