import React from "react";

function CartItem({ itemName, price, quantity, increase, decrease }) {
  return (
    <div style={styles.item}>
      <h3>{itemName}</h3>
      <p>Price per item: ₹{price}</p>
      <p><b>Quantity:</b> {quantity}</p>

      <div>
        <button style={styles.btn} onClick={increase}>+</button>
        <button
          style={styles.btn}
          onClick={decrease}
          disabled={quantity === 0}
        >
          -
        </button>
      </div>
    </div>
  );
}

const styles = {
  item: {
    background: "rgba(255,255,255,0.6)",
    padding: "15px",
    borderRadius: "12px"
  },
  btn: {
    margin: "6px",
    padding: "8px 16px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer"
  }
};

export default CartItem;
