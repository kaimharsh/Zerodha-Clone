import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // ⭐ Access the context functions correctly
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });
      closeBuyWindow(); // Close window after successful order
    } catch (err) {
      console.error("Error placing order", err);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      {/* ⭐ HEADER SECTION: Shows the stock name you clicked */}
      <div className="buy-header" style={{ marginBottom: "20px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
        <h3 style={{ margin: 0, color: "#444", fontSize: "16px" }}>
          Buy <span style={{ color: "#387ed1" }}>{uid}</span>
        </h3>
        <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#9b9b9b" }}>NSE: ₹{stockPrice || "0.00"}</p>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span style={{ fontSize: "12px", color: "#666" }}>
          Margin required <strong style={{ color: "#222" }}>₹{(stockQuantity * stockPrice).toFixed(2)}</strong>
        </span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;