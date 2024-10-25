import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import {ThreeDot} from 'react-loading-indicators'
import * as Yup from "yup";
const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "password must conatin minimum 8 characters,uppercases , lowercases, numbers, and characters"
      )
      .required(),
  });
  const registerFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setisLoading(true);
      axios
        .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
        .then((data) => {
          if (data.status == 200) {
            localStorage.setItem('token',data.data.token)
            setisLoading(false);
            toast.success("login successfully");
            navigate("/");
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
      <h2 className="mb-3">Login Now:</h2>
      <form onSubmit={registerFormik.handleSubmit}>
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
        <button
          disabled={
            !(registerFormik.isValid && registerFormik.dirty && !isLoading)
          }
          type="submit"
          className="btn bg-main text-white"
        >
          {/* <ThreeDot color="white" size="medium" text="" textColor="" /> */}
          {isLoading ? <i className="fas fa-spinner fa-spin"></i>: "Login"}
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

export default Login;
