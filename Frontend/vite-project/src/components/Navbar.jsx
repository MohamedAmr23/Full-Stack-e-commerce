import React from 'react'
import logo from '../assets/freshcart-logo.svg'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-main-light navbar-light">
  <div className="container">
    <a className="navbar-brand" href="#"> <img src={logo} alt='logo'/></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Categories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Brands</a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2">
        <a type="button" className="btn  position-relative me-3">
            Cart <i className="fa-solid fa-cart-shopping"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                10
                <span className="visually-hidden">unread messages</span>
            </span>
    </a>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar