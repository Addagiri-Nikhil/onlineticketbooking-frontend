import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Addon.css";

const Addon = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, name: "Popcorn", price: 100, img: "🍿", type: "popcorn" },
    { id: 2, name: "Coke", price: 70, img: "🥤", type: "coke" },
    { id: 3, name: "Samosa", price: 50, img: "🥟", type: "samosa" },
  ];

  const [counts, setCounts] = useState({});
  const subtotal = items.reduce(
    (total, item) => total + (counts[item.id] || 0) * item.price,
    0
  );

  const gst = (subtotal * 0.18).toFixed(2);
  const total = (subtotal + parseFloat(gst)).toFixed(2);

  const incrementCount = (id) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrementCount = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  const handlePay = () => {
    navigate("/ticket");
  };

  return (
    <div className="addon-container">
      <div className="items-section">
        {items.map((item) => (
          <div key={item.id} className={`item-card snake-${item.type}`}>
            <div className="item-details">
              <span className="price">RS:- {item.price}</span>
              <button
                onClick={() => incrementCount(item.id)}
                className="btn add"
              >
                +
              </button>
              <button
                onClick={() => decrementCount(item.id)}
                className="btn remove"
              >
                -
              </button>
              <span className="item-img">{item.img}</span>
            </div>
            <div className="item-name">{item.name}</div>
          </div>
        ))}
      </div>

      <div className="summary-section">
        <div className="summary-line">Sub Total: {subtotal}</div>
        <div className="summary-line">GST&OT: {gst}</div>
        <div className="summary-line">Total: {total}</div>
        <button onClick={handlePay} className="pay-button">
          PAY
        </button>
      </div>
    </div>
  );
};

export default Addon;
