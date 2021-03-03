import React from "react";
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

const Home = () => {
  return (
    <>
      <div className="" style={{ paddingTop: "6rem" }}>
        <div className="row">
          <FilterBar />
          <ProductList />
          <ShoppingCart />
        </div>
      </div>
    </>
  );
};

export default Home;
