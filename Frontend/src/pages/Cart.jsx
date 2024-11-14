// import React, { useContext, useEffect } from "react";
// import { CartContext } from "../context/CartContext.jsx";
// import Loading from "../components/Loading.jsx";
// const Cart = () => {
//   let { getCart, cart } = useContext(CartContext);

//   useEffect(() => {
//     getCart();

//   }, []);
//   return (
//     <>
//       <div>Cart</div>
//       {!cart ? (
//         <Loading />
//       ) : (
//         <div>
//           <div className="relative overflow-x-auto w-75 mx-auto shadow-md sm:rounded-lg mb-3">
//             <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                   <th scope="col" className="px-16 py-3">
//                     <span className="sr-only">Image</span>
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Product
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Qty
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Price
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.data.products.map((product) => (
//                   <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                     <td className="p-4">
//                       <img
//                         src={product.product.imageCover}
//                         className="w-16 md:w-32 max-w-full max-h-full"
//                         alt="Apple Watch"
//                       />
//                     </td>
//                     <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
//                       {product.product.title}
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex items-center">
//                         <button
//                           className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
//                           type="button"
//                         >
//                           <span className="sr-only">Quantity button</span>
//                           <svg
//                             className="w-3 h-3"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 18 2"
//                           >
//                             <path
//                               stroke="currentColor"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M1 1h16"
//                             />
//                           </svg>
//                         </button>
//                         <div>
//                           <span>{product.count}</span>
//                         </div>
//                         <button
//                           className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
//                           type="button"
//                         >
//                           <span className="sr-only">Quantity button</span>
//                           <svg
//                             className="w-3 h-3"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 18 18"
//                           >
//                             <path
//                               stroke="currentColor"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M9 1v16M1 9h16"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </td>
//                     <td className="px-3 py-4 font-semibold text-gray-900 dark:text-white">
//                       {product.price}EGY
//                     </td>
//                     <td className="px-6 py-4">
//                       <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot >
//                 <tr className="pb-3 font-semiboid text-xl text-black">
//                   <td colSpan={4} className="pl-5">Total Cart :</td>
//                   <td>{cart.data.totalCartPrice}</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Cart;

import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext.jsx";
import Loading from "../components/Loading.jsx";

const Cart = () => {
  const { getCart, cart } = useContext(CartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <div>Cart</div>
      {!cart ? (
        <Loading />
      ) : (
        <div className="container my-4">
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" style={{ width: '10%' }}>Image</th>
                  <th scope="col">Product</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.data.products.map((product) => (
                  <tr key={product.product.id}>
                    <td>
                      <img
                        src={product.product.imageCover}
                        className="img-fluid rounded"
                        alt="Product"
                        style={{ maxWidth: '80px' }}
                      />
                    </td>
                    <td>{product.product.title}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-light btn-sm me-2"
                          type="button"
                        >
                          <i className="bi bi-dash-lg">-</i>
                        </button>
                        <span>{product.count}</span>
                        <button
                          className="btn btn-light btn-sm ms-2"
                          type="button"
                        >
                          <i className="bi bi-plus-lg">+</i>
                        </button>
                      </div>
                    </td>
                    <td>{product.price} EGY</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" className="text-end fw-bold">Total Cart:</td>
                  <td>{cart.data.totalCartPrice} EGY</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
// import React, { useContext, useEffect } from "react";
// import { CartContext } from "../context/CartContext.jsx";
// import Loading from "../components/Loading.jsx";
// const Cart = () => {
//   let { getCart, cart } = useContext(CartContext);

//   useEffect(() => {
//     getCart();
//   }, []);
//   return (
//     <>
//       <div>Cart</div>
//       {!cart ? (
//         <Loading />
//       ) : (
//         <div>
//           <div className="table-responsive w-75 mx-auto shadow-sm mb-3">
//             <table className="table table-hover text-center">
//               <thead className="table-light mb-5">
//                 <tr>
//                   <th scope="col">
//                     <span className="visually-hidden">Image</span>
//                   </th>
//                   <th scope="col">Product</th>
//                   <th scope="col">Qty</th>
//                   <th scope="col">Price</th>
//                   <th scope="col">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="mt-4">
//                 {cart.data.products.map((product) => (
//                   <tr key={product.product.id}>
//                     <td className="p-2">
//                       <img
//                         src={product.product.imageCover}
//                         className="img-fluid"
//                         alt="Apple Watch"
//                         style={{ width: "4rem" }}
//                       />
//                     </td>
//                     <td className="fw-semibold text-dark">
//                       {product.product.title}
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center justify-content-center">
//                         <button
//                           className="btn btn-outline-secondary btn-sm rounded-circle me-2"
//                           type="button"
//                           aria-label="Decrease quantity"
//                         >
//                           <svg
//                             className="bi bi-dash"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="currentColor"
//                             viewBox="0 0 16 16"
//                             width="12"
//                             height="12"
//                           >
//                             <path d="M3.5 8a.5.5 0 0 0 .5-.5v1a.5.5 0 0 0-.5-.5h-6zm.5 0h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z" />
//                           </svg>
//                         </button>
//                         <span>{product.count}</span>
//                         <button
//                           className="btn btn-outline-secondary btn-sm rounded-circle ms-2"
//                           type="button"
//                           aria-label="Increase quantity"
//                         >
//                           <svg
//                             className="bi bi-plus"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="currentColor"
//                             viewBox="0 0 16 16"
//                             width="12"
//                             height="12"
//                           >
//                             <path d="M8 3.5a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3H4a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 .5-.5z" />
//                           </svg>
                  
//                         </button>
//                       </div>
//                     </td>
//                     <td className="fw-semibold text-dark">
//                       {product.price} EGY
//                     </td>
//                     <td>
//                       <button className="btn btn-link text-danger p-0">
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr className="fw-bold">
//                   <td colSpan={4} className="text-start ps-3">
//                     Total Cart :
//                   </td>
//                   <td>{cart.data.totalCartPrice}</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Cart;
