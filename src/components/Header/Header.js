import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = ({ cartLength }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavLink
          className="navbar-category"
          to="/"
          style={{ fontSize: "large", color: "white" }}
        >
          Sports Club
        </NavLink>
        <div>
          <ul className="navbar-nav ml-auto">
            <li
              className="nav-item"
              style={{ fontSize: "large", color: "white" }}
            >
              <i className="fa fa-shopping-cart mr-2" aria-hidden="true" />
              Cart {cartLength ? `(${cartLength})` : ""}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cartLength: state.shop.cart.length,
  };
};

export default connect(mapStateToProps, null)(Header);
