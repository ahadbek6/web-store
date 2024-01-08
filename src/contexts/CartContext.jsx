import { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();
const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = (cart.reduce((acc, item) => acc + item.price * item.quantity, 0))
    setTotal(total);
  }, [cart])

  useEffect(() => {
    const count = (cart.reduce((acc, item) => acc + item.quantity, 0))
    setTotalCount(count);
  }, [cart])

  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 }
    console.log(newItem)
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity + 1 }
        } else {
          return item;
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }
  const clearCart = () => {
    setCart([]);
  }
  const incrementQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    addToCart(item, id);
  }
  const decrementQuantity = (id) => {
    const itemCart = cart.find(item => item.id === id)
    if (itemCart) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (itemCart.quantity < 2) {
      removeFromCart(id)
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity, totalCount, total }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
