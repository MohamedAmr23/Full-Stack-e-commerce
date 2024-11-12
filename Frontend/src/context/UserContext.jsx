import { createContext, useEffect, useState } from "react";


export const UserContext= createContext()




export default function UserContextProvider({children}){
    const [userData,setUserData]=useState(null)
    useEffect(()=>{
        if(localStorage.getItem('token')){
          setUserData(localStorage.getItem('token'))
        }
      },[])
    return <UserContext.Provider value={{userData , setUserData}}>
        {children}
    </UserContext.Provider>
}