import React from "react";
import { connect } from "react-redux";
import { formatMoney } from "../../pipes/priceFormatter";
import { addProductToCart } from "../../actions";

const ProductDetail = (props) => {
  const {
    title,
    images,
    category,
    price,

    description,
  } = props.product;

  const onCart = () => {
    props.dispatch(addProductToCart(props.product));
  };

  return (
    <div className="col-sm-4">
      <article className="card-body p-5" style={{ textAlign: "center" }}>
        <img
          className="card-img-top product__img"
          src={images[0]}
          alt={title}
        />
        <div>
          <h3 className="title mb-3">{title}</h3>
          <p className="price-detail-wrap">
            <span className="price h3 text-warning">
              <span className="num">{formatMoney(price)}</span>
            </span>
          </p>
          <dl className="item-property">
            <dt>Description</dt>
            <dd>
              <p className="text-capitalize">{description}</p>
            </dd>
          </dl>
          <dl className="param param-feature">
            <dt>Sport</dt>
            <dd className="text-capitalize">{category}</dd>
          </dl>
          <hr />
          <button
            onClick={onCart}
            className="btn btn-lg btn-outline-primary text-uppercase"
          >
            <i className="fa fa-shopping-cart" /> Add to cart
          </button>
        </div>
      </article>
    </div>
  );
};

export default connect()(ProductDetail);
