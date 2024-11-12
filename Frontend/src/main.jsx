// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import UserContextProvider from "./context/UserContext.jsx";
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <UserContextProvider>
    <App />
  </UserContextProvider>
  // </StrictMode>,
);
