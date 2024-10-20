import Navbar from '../components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
const MainPage = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default MainPage