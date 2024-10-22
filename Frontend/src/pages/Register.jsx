import { useFormik } from "formik";
import React from "react";

const Register = () => {
  const registerFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
          id="name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={registerFormik.values.email}
          type="email"
          className="form-control my-2 mb-4"
          name="email"
          onChange={registerFormik.handleChange}
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={registerFormik.values.password}
          type="password"
          className="form-control my-2 mb-4"
          name="password"
          onChange={registerFormik.handleChange}
          id="password"
        />
        <label htmlFor="rePassword">rePassword</label>
        <input
          value={registerFormik.values.rePassword}
          type="password"
          className="form-control my-2 mb-4"
          name="rePassword"
          onChange={registerFormik.handleChange}
          id="rePassword"
        />
        <button type="submit" className="btn bg-main text-white">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
