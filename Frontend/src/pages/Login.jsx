import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { UserContext } from "../context/UserContext.jsx";

const Login = () => {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);

  // Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, uppercase, lowercase, numbers, and special characters"
      )
      .required("Password is required"),
  });

  // Formik setup
  const registerFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setisLoading(true);
      axios
        .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          toast.success("Login successfully");
          setUserData(response.data.token);
          navigate("/");
        })
        .catch((error) => {
          const message = error.response?.data?.message || "An error occurred";
          toast.error(message);
        })
        .finally(() => setisLoading(false));
    },
  });

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "500px" }}>
        <h2 className="mb-4 text-center">Login</h2>
        <form onSubmit={registerFormik.handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${registerFormik.errors.email && registerFormik.touched.email ? "is-invalid" : ""
                }`}
              value={registerFormik.values.email}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
            />
            {registerFormik.errors.email && registerFormik.touched.email && (
              <div className="invalid-feedback">{registerFormik.errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`form-control ${registerFormik.errors.password && registerFormik.touched.password ? "is-invalid" : ""
                }`}
              value={registerFormik.values.password}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
            />
            {registerFormik.errors.password && registerFormik.touched.password && (
              <div className="invalid-feedback">{registerFormik.errors.password}</div>
            )}
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-between align-items-center">
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={!registerFormik.isValid || !registerFormik.dirty || isLoading}
            >
              {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

