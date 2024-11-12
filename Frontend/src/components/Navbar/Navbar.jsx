import { useContext } from "react";
import logo from "../../assets/freshcart-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext.jsx";
import { UserContext } from "../../context/UserContext.jsx";
const Navbar = () => {
  const { count } = useContext(AppContext);
  const { userData , setUserData} = useContext(UserContext);
  const navigate= useNavigate()
  const logOut=()=>{
    setUserData(null)
    localStorage.removeItem('token')
    navigate('login')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-main-light navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to="">
          {" "}
          <img src={logo} alt="logo" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userData && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="cart">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="categories">
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="brands">
                  Brands
                </NavLink>
              </li>
            </ul>
          )}
          {userData ? (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
              <NavLink
                type="button"
                className="btn border-0 position-relative me-4"
              >
                Cart <i className="fa-solid fa-cart-shopping"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {count}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </NavLink>
              <li onClick={()=>logOut()} className="nav-item">
                <NavLink className="nav-link" to="">
                  Logout
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              {/* <NavLink
                type="button"
                className="btn border-0 position-relative me-3"
              >
                Cart <i className="fa-solid fa-cart-shopping"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {count}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </NavLink> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
