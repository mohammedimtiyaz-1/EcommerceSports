import React, { useState } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";

import { categoryFilter } from "../../pipes/categoryFilter";

function ProductList(props) {
  const [state, setState] = useState({
    colValue: "col-lg-4",
    perPage: 12,
    currentPage: 1,
    pagesToShow: 3,
    gridValue: 3,
  });

  return (
    <div className="col-lg-7">
      <div className="row mb-3"></div>
      <div className="row">
        {props.products.map((product) => {
          let classes = `${state.colValue} col-md-6 mb-4`;
          return (
            <div className={classes}>
              <Product key={product.id} product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const categorys = state.categoryFilter;
  const filterByCategoryArr = categoryFilter(state.shop.products, categorys);
  return { products: filterByCategoryArr };
};

export default connect(mapStateToProps, null)(ProductList);
