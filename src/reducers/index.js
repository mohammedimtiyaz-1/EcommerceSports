import { combineReducers } from "redux";
import shop from "./shop.reducer";
import { categoryFilterReducer } from "./category.filter.reducer";

export default combineReducers({
  shop,
  categoryFilter: categoryFilterReducer,
});
