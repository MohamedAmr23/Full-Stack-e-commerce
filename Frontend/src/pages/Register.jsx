import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { UserContext } from "../context/UserContext.jsx";

const Register = () => {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);


  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(30, "Name must be at most 30 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, uppercase, lowercase, numbers, and special characters"
      )
      .required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Password confirmation is required"),
  });

  const registerFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);
        const { data, status } = await axios.post(
          "https://ecommerce.routemisr.com/api/v1/auth/signup",
          values
        );

        if (status === 201) {
          localStorage.setItem("token", data.token);
          setUserData(data.token);
          toast.success("Signup successful!");
          navigate("/");
          resetForm(); 
        }
      } catch (error) {
        if (error.response?.status === 409) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred. Please try again.");
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="w-50 m-auto py-5">
      <h2 className="mb-4">Register Now:</h2>
      <form onSubmit={registerFormik.handleSubmit}>
        {/* اسم المستخدم */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-control ${
              registerFormik.touched.name && registerFormik.errors.name
                ? "is-invalid"
                : ""
            }`}
            value={registerFormik.values.name}
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
          />
          {registerFormik.touched.name && registerFormik.errors.name && (
            <div className="invalid-feedback">{registerFormik.errors.name}</div>
          )}
        </div>

       
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${
              registerFormik.touched.email && registerFormik.errors.email
                ? "is-invalid"
                : ""
            }`}
            value={registerFormik.values.email}
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
          />
          {registerFormik.touched.email && registerFormik.errors.email && (
            <div className="invalid-feedback">{registerFormik.errors.email}</div>
          )}
        </div>

        
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={`form-control ${
              registerFormik.touched.password && registerFormik.errors.password
                ? "is-invalid"
                : ""
            }`}
            value={registerFormik.values.password}
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
          />
          {registerFormik.touched.password && registerFormik.errors.password && (
            <div className="invalid-feedback">
              {registerFormik.errors.password}
            </div>
          )}
        </div>

        
        <div className="mb-3">
          <label htmlFor="rePassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="rePassword"
            name="rePassword"
            className={`form-control ${
              registerFormik.touched.rePassword &&
              registerFormik.errors.rePassword
                ? "is-invalid"
                : ""
            }`}
            value={registerFormik.values.rePassword}
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
          />
          {registerFormik.touched.rePassword &&
            registerFormik.errors.rePassword && (
              <div className="invalid-feedback">
                {registerFormik.errors.rePassword}
              </div>
            )}
        </div>

  
        <div className="d-flex">
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={!registerFormik.isValid || isLoading}
          >
            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Register"}
          </button>
          <button
            type="button"
            className="btn btn-secondary ms-3"
            onClick={registerFormik.handleReset}
            disabled={!registerFormik.dirty || isLoading}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
