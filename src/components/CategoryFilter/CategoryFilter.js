import React, { Component } from "react";
import { connect } from "react-redux";
import "./CategoryFilter.scss";
import { categorys } from "../../data/categorys";
import { addCategoryToFilter, removeCategoryFromFilter } from "../../actions";

const CategoryFilter = (props) => {
  const { dispatch, categoryItemsCount } = props;
  const handleSelectBox = (e) => {
    const name = e.target.name;
    if (e.target.checked) {
      dispatch(addCategoryToFilter(name));
    } else {
      dispatch(removeCategoryFromFilter(name));
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h3>Sports</h3>
      </div>
      <ul className="list-group flex-row flex-wrap">
        {categorys.map((category, i) => (
          <li key={i + category} className="list-group-item flex-50">
            <label className="custom-checkbox text-capitalize">
              {category} ({categoryItemsCount[category]})
              <input
                type="checkbox"
                name={category}
                className="custom-checkbox__input"
                onInput={handleSelectBox}
              />
              <span className="custom-checkbox__span"></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const categoryItemsCount = {};

  state.shop.products.forEach((p) => {
    categoryItemsCount[p.category] = categoryItemsCount[p.category] + 1 || 1;
  });

  return {
    categoryItemsCount,
  };
};

export default connect(mapStateToProps)(CategoryFilter);
