import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { formatMoney } from "../../pipes/priceFormatter";
import CartItem from "../../components/CartItem/CartItem";
import { clearCart } from "../../actions";

const Checkout = (props) => {
  const clearCartTrigger = () => {
    props.dispatch(clearCart());
  };
  return (
    <>
      <div className="container" style={{ paddingTop: "6rem" }}>
        <div className="card shopping-cart">
          <div className="card-header bg-dark text-light">
            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>

            <div className="clearfix"></div>
          </div>
          <div className="card-body">
            {props.cartItemCount ? (
              props.cartItems.map((cart) => (
                <CartItem {...cart} checkout={true} img={cart.images[0]} />
              ))
            ) : (
              <h1 className="display-4 mt-5 text-center">
                There is no product in your cart
              </h1>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div className="card-footer">
              <div className="pull-right" style={{ margin: "10px" }}>
                <div className="pull-right" style={{ margin: "5px" }}>
                  Total price: <b>{formatMoney(props.totalPrice)}</b>
                </div>
              </div>
            </div>
            <button onClick={clearCartTrigger}>
              <Link to="/" style={{ fontSize: "large", color: "green" }}>
                Place Order
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "state has changed");

  return {
    cartItems: state.shop.cart,
    cartItemCount: state.shop.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
    totalPrice: state.shop.cart.reduce((count, curItem) => {
      return count + curItem.price * curItem.quantity;
    }, 0),
  };
};

export default connect(mapStateToProps, null)(Checkout);
