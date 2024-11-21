import  { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext.jsx";
import Loading from "../components/Loading.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const { getCart, cart , updateProductCount , deleteCart} = useContext(CartContext);

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
                        <button onClick={()=>updateProductCount(product.product.id,product.count - 1)}
                          className="btn btn-light btn-sm me-2"
                          type="button"
                        >
                          <i className="bi bi-dash-lg">-</i>
                        </button>
                        <span>{product.count}</span>
                        <button onClick={()=>updateProductCount(product.product.id,product.count + 1)}
                          className="btn btn-light btn-sm ms-2"
                          type="button"
                        >
                          <i className="bi bi-plus-lg">+</i>
                        </button>
                      </div>
                    </td>
                    <td>{product.price} EGY</td>
                    <td>
                      <button onClick={()=>deleteCart(product.product.id)} className="btn btn-danger btn-sm">
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
            <Link to='/checkout' className="bg-main text-white p-2 m-2 rounded ">checkout</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
