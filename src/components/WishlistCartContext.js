import React, { createContext, useState, useEffect, useContext } from "react";
const CartContext = createContext();
export const WishlistCartContext = createContext();
// export const useCart = () => useContext(CartContext);
export const WishlistCartProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  const clearCart = () => {
    setCart([]);
  };
  // Load data from localStorage on mount
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedCartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;

    setWishlist(savedWishlist);
    setCart(savedCart);
    setCartCount(savedCartCount);
  }, []);

  // Save wishlist to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Save cartCount to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cartCount]);

  // Add/Remove item from Wishlist
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);

      return exists
        ? prevWishlist.filter((item) => item.id !== product.id)
        : [...prevWishlist, product];
    });
  };

  // Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      let updatedCart;
      if (existingProduct) {
        // If the product already exists, update its quantity
        updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // If the product is new, add it with count 1
        updatedCart = [...prevCart, { ...product, count: 1 }];
      }

      return updatedCart;
    });

    setCartCount((prevCount) => prevCount + 1);
  };

  // Remove from Cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    setCartCount((prevCount) => Math.max(prevCount - 1, 0)); // Prevent negative cart count
  };

  // ✅ Update Cart Product Quantity
  const updateCartQuantity = (productId, newCount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, count: newCount } : item
      )
    );
  };
  return (
    <WishlistCartContext.Provider
      value={{
        wishlist,
        cart,
        cartCount,
        toggleWishlist,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        shippingInfo,
        setShippingInfo,
        paymentInfo,
        setPaymentInfo,
      }}
    >
      {children}
    </WishlistCartContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistCartContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistCartProvider");
  }
  return context;
};

export const useCart = () => {
  const context = useContext(WishlistCartContext);
  if (!context) {
    throw new Error("useCart must be used within a WishlistCartProvider");
  }
  return context;
};