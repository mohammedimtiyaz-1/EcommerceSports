import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { formatMoney } from "../../pipes/priceFormatter";

import "./Product.scss";

import { addProductToCart } from "../../actions";

const Product = (props) => {
  const { title, price, images, description, id } = props.product;

  const imageRef = React.createRef();
  const [img, setImg] = useState(images[0]);

  return (
    <div className="card h-100 product">
      <Link to={`/products/${id}`} className="product__link">
        <img
          className="card-img-top product__img"
          src={img}
          alt={title}
          ref={imageRef}
        />
      </Link>
      <div className="product__text">
        <h4 className="card-title product__title">
          <NavLink className="nav-link-title" to={`/products/${id}`}>
            {title}
          </NavLink>
        </h4>
        <h5 className="product__price">{formatMoney(price)}</h5>
        <p className="card-text product__description">{description}</p>
        <button
          onClick={() => {
            props.dispatch(addProductToCart({ ...props.product }));
          }}
          className="btn btn-info product__add-to-cart"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default connect()(Product);
