import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import {ThreeDot} from 'react-loading-indicators'
import * as Yup from "yup";
const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(30).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "password must conatin minimum 8 characters,uppercases , lowercases, numbers, and characters"
      )
      .required(),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "password not match")
      .required(),
  });
  const registerFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setisLoading(true);
      axios
        .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
        .then((data) => {
          if (data.status == 201) {
            setisLoading(false);
            toast.success("signup successfully");
            navigate("/login");
          }
        })
        .catch((error) => {
          if (error.response.status == 409) {
            setisLoading(false);
            toast.error(error.response.data.message);
          }
        });
    },
  });
  return (
    <div className="w-50 m-auto py-5">
      <h2 className="mb-3">Register Now:</h2>
      <form onSubmit={registerFormik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={registerFormik.values.name}
          type="text"
          className="form-control my-2 mb-4"
          name="name"
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          id="name"
        />
        {registerFormik.errors.name && registerFormik.touched.name ? (
          <div className="alert alert-danger">{registerFormik.errors.name}</div>
        ) : (
          ""
        )}
        <label htmlFor="email">Email</label>
        <input
          value={registerFormik.values.email}
          type="email"
          className="form-control my-2 mb-4"
          name="email"
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          id="email"
        />
        {registerFormik.errors.email && registerFormik.touched.email ? (
          <div className="alert alert-danger">
            {registerFormik.errors.email}
          </div>
        ) : (
          ""
        )}
        <label htmlFor="password">Password</label>
        <input
          value={registerFormik.values.password}
          type="password"
          className="form-control my-2 mb-4"
          name="password"
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          id="password"
        />
        {registerFormik.errors.password && registerFormik.touched.password ? (
          <div className="alert alert-danger">
            {registerFormik.errors.password}
          </div>
        ) : (
          ""
        )}
        <label htmlFor="rePassword">rePassword</label>
        <input
          value={registerFormik.values.rePassword}
          type="password"
          className="form-control my-2 mb-4"
          name="rePassword"
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          id="rePassword"
        />
        {registerFormik.errors.rePassword &&
        registerFormik.touched.rePassword ? (
          <div className="alert alert-danger">
            {registerFormik.errors.rePassword}
          </div>
        ) : (
          ""
        )}
        <button
          disabled={
            !(registerFormik.isValid && registerFormik.dirty && !isLoading)
          }
          type="submit"
          className="btn bg-main text-white"
        >
          {/* <ThreeDot color="white" size="medium" text="" textColor="" /> */}
          {isLoading ? <i className="fas fa-spinner fa-spin"></i>: "Register"}
        </button>
        <button
          disabled={!registerFormik.dirty}
          className="btn bg-main text-white mx-3"
          onClick={registerFormik.handleReset}
        >
          reset
        </button>
      </form>
    </div>
  );
};

export default Register;
