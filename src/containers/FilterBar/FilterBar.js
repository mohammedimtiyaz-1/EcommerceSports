import React from "react";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

function FilterBar() {
  return (
    <div className="col-lg-2">
      <div className="row">
        <div className="col-12" style={{ marginLeft: "8%" }}>
          <CategoryFilter />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
