import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(null);
  async function addProduct(productId) {
    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      console.log(data);
      toast.success(data.message);
      setCart(data);
    } catch (err) {
      console.log(err);
    }
  }
  
  async function updateProductCount(productId, count) {
    if (count > 0) {
      try {
        let { data } = await axios.put(
          `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
          {
            count,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
        setCart(data);
      } catch (err) {
        console.log(err);
      }
    }
  }
  async function getCart() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setCart(data);
    } catch (err) {
      console.log(err);
    }
  }
  async function checkout(shippingAddress) {
    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`,{
          shippingAddress
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      // setCart(data);
      window.location.href = data.session.url
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteCart(productId) {
    try {
      let { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setCart(data);
    } catch (err) {
      console.log(err);
    }
  }
  async function clearCart() {
    try {
      let { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setCart(null);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    getCart()
  },[])

  return (
    <CartContext.Provider
      value={{ updateProductCount, addProduct, getCart,deleteCart, cart , checkout , clearCart}}
    >
      {children}
    </CartContext.Provider>
  );
}
