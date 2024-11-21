import { useFormik } from "formik";
import { useContext } from "react";
// import {ThreeDot} from 'react-loading-indicators'

import { CartContext } from "../context/CartContext.jsx";

const Checkout = () => {
  let { checkout } = useContext(CartContext);

  const formik = useFormik({
    initialValues: {
      details: "",
      city: "",
      phone: "",
    },
    onSubmit: checkout,
  });
  return (
    <div className="w-50 m-auto py-5">
      <h2 className="mb-3">Checkout Now:</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="Details">Details</label>
        <input
          value={formik.values.details}
          type="text"
          className="form-control my-2 mb-4"
          name="details"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
        />
        <label htmlFor="city">City</label>
        <input
          value={formik.values.city}
          type="text"
          className="form-control my-2 mb-4"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="city"
        />
        <label htmlFor="phone">Phone</label>
        <input
          value={formik.values.phone}
          type="tel"
          className="form-control my-2 mb-4"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="phone"
        />
        <button
          // disabled={!(formik.isValid && formik.dirty)}
          type="button"
          className="btn bg-main text-white"
          onClick={formik.handleSubmit}
        >
          checkout
        </button>

        {/* <button
          disabled={!formik.dirty}
          className="btn bg-main text-white mx-3"
          onClick={formik.handleReset}
        >
          reset
        </button> */}
      </form>
    </div>
  );
};

export default Checkout;
