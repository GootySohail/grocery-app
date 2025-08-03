import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GroceryList from "./components/GroceryList";
import { getItems, addItem } from "./api";

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", quantity: "" });

  useEffect(() => {
    getItems().then(setItems);
  }, []);

  const handleSubmit = async () => {
    const newItem = await addItem(form);
    setItems([...items, newItem]);
    setForm({ name: "", price: "", quantity: "" });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Header />
      <div>
        <input
          placeholder="Item Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          placeholder="Qty"
          type="number"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <GroceryList items={items} />
    </div>
  );
}

export default App;
