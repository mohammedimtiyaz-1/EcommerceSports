import React, { useState } from "react";
import { connect } from "react-redux";
import { formatMoney } from "../../pipes/priceFormatter";
import "./CartItem.scss";
import {
  decrementCartQuantity,
  incrementCartQuantity,
  removeProductToCart,
} from "../../actions";

const CartItem = ({ title, price, checkout, quantity, id, dispatch }) => {
  console.log(id);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const removeItem = () => {
    dispatch(removeProductToCart(id));
  };

  const incrementOrDecrement = (e, type) => {
    const value = itemQuantity;
    console.log(type, value);

    if (type === "inc" && value < 10) {
      setItemQuantity(itemQuantity + 1);
      dispatch(incrementCartQuantity(id));
    }

    if (type === "desc" && value > 1) {
      setItemQuantity(itemQuantity - 1);
      dispatch(decrementCartQuantity(id));
    }
  };

  return (
    <div
      className="row align-items-center mb-3"
      style={{ border: "1px solid black", justifyContent: "space-around" }}
    >
      <h4 className="product-name">
        <strong>{title}</strong>
      </h4>
      {!checkout ? (
        <div
          className=" text-sm-center"
          style={{ display: "flex", alignItems: "center", padding: "5px" }}
        >
          <div>
            <h6 style={{ maxWidth: "90%", overflow: "hidden" }}>
              <strong>{formatMoney(price)}</strong>
            </h6>

            <div className="col-4 col-sm-4 col-md-4">
              <div className="quantity">
                <input
                  onClick={(e) => {
                    incrementOrDecrement(e, "inc");
                  }}
                  type="button"
                  value="+"
                  className="plus"
                />
                <input
                  type="number"
                  step="1"
                  max="10"
                  min="1"
                  value={itemQuantity}
                  title="Qty"
                  className="qty"
                  size="4"
                />
                <input
                  onClick={(e) => {
                    incrementOrDecrement(e, "desc");
                  }}
                  type="button"
                  value="-"
                  className="minus"
                />
              </div>
            </div>
          </div>
          <div className="col-2 col-sm-2 col-md-2 text-right">
            <button
              onClick={removeItem}
              type="button"
              className="btn btn-outline-danger btn-xs"
            >
              X
            </button>
          </div>
        </div>
      ) : (
        <h4>{quantity}</h4>
      )}
    </div>
  );
};

export default connect()(CartItem);
