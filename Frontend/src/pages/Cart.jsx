import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext.jsx";
import Loading from "../components/Loading.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const { getCart, cart, updateProductCount, deleteCart } = useContext(CartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <h2 className="text-center mb-4 py-3">Cart</h2>
      {!cart ? (
        <Loading />
      ) : (
        <div className="container my-4">
          <div className="table-responsive bg-light p-3 shadow-sm rounded">
            <table className="table table-striped table-hover align-middle table-sm">
              <thead className="table-dark text-center">
                <tr>
                  <th scope="col" style={{ width: "10%" }}>Image</th>
                  <th scope="col">Product</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.data.products.map((product) => (
                  <tr key={product.product.id}>
                    <td className="text-center">
                      <img
                        src={product.product.imageCover}
                        className="img-fluid rounded"
                        alt="Product"
                        style={{ maxWidth: "80px" }}
                      />
                    </td>
                    <td className="text-center">{product.product.title}</td>
                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <button
                          onClick={() =>
                            updateProductCount(product.product.id, product.count - 1)
                          }
                          className="btn btn-light btn-sm me-2"
                          type="button"
                        >
                          <i className="bi bi-dash-lg">-</i>
                        </button>
                        <span className="fw-bold">{product.count}</span>
                        <button
                          onClick={() =>
                            updateProductCount(product.product.id, product.count + 1)
                          }
                          className="btn btn-light btn-sm ms-2"
                          type="button"
                        >
                          <i className="bi bi-plus-lg">+</i>
                        </button>
                      </div>
                    </td>
                    <td className="text-center">{product.price} EGY</td>
                    <td className="text-center">
                      <button
                        onClick={() => deleteCart(product.product.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" className="text-end fw-bold">Total Cart:</td>
                  <td className="text-center">{cart.data.totalCartPrice} EGY</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <Link to="/" className="btn btn-outline-secondary">
              Continue Shopping
            </Link>
            <Link to="/checkout" className="btn btn-primary">
              Checkout
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
