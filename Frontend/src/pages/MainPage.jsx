import Navbar from "../components/Navbar/Navbar.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import AppContextProvider from "../context/AppContext.jsx";
import { UserContext } from "../context/UserContext.jsx";
import { useContext, useEffect } from "react";
const MainPage = () => {
  let {setUserData} = useContext(UserContext)
  let navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('token')){
      setUserData(localStorage.getItem('token'))
    }else{
      navigate('login')
    }
  },[])
  return (
    <>
      <AppContextProvider>
        <Navbar />
        <Outlet />
      </AppContextProvider>
    </>
  );
};

export default MainPage;
