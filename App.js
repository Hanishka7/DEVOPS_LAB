import Cart from "./Cart";

function App() {
  const products = [
    { id: 1, name: "Bluetooth Speaker", price: 500, color: "#e0f2fe" },
    { id: 2, name: "Travelling Trolley", price: 1200, color: "#fef3c7" },
    { id: 3, name: "Water Bottle", price: 50, color: "#dcfce7" },
    { id: 4, name: "Shoes", price: 800, color: "#fce7f3" },
    { id: 5, name: "Wrist Watch", price: 1500, color: "#ede9fe" },
    { id: 6, name: "Sunglasses", price: 300, color: "#fff7ed" },
    { id: 7, name: "Backpack", price: 700, color: "#f0fdf4" },
    { id: 8, name: "Headphones", price: 400, color: "#eff6ff" }
  ];

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <Cart
          key={product.id}
          itemName={product.name}
          price={product.price}
          color={product.color}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "25px",
    padding: "30px",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};

export default App;
