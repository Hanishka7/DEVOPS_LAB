import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart({ itemName, price, color }) {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div style={{ ...styles.cart, background: color }}>
      <h2 style={styles.title}>🛒 Shopping Cart</h2>

      <CartItem
        itemName={itemName}
        price={price}
        quantity={quantity}
        increase={increase}
        decrease={decrease}
        color={color}
      />

      <h3 style={styles.total}>
        Total Price: ₹{quantity * price}
      </h3>
    </div>
  );
}

const styles = {
  cart: {
    width: "260px",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    textAlign: "center"
  },
  title: {
    color: "#1e3a8a"
  },
  total: {
    color: "#065f46",
    marginTop: "12px"
  }
};

export default Cart;
