export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const INCREMENT_CART_ITEM_QUANTITY = "INCREMENT_CART_ITEM_QUANTITY";
export const DECREMENT_CART_ITEM_QUANTITY = "DECREMENT_CART_ITEM_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const addProductToCart = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const removeProductToCart = (productId) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  };
};
export const clearCart = () => {
  return {
    type: CLEAR_CART,
    payload: null,
  };
};

export const incrementCartQuantity = (productId) => {
  return {
    type: INCREMENT_CART_ITEM_QUANTITY,
    payload: productId,
  };
};

export const decrementCartQuantity = (productId) => {
  return {
    type: DECREMENT_CART_ITEM_QUANTITY,
    payload: productId,
  };
};

export const ADD_CATEGORY_TO_FILTER = "ADD_CATEGORY_TO_FILTER";
export const REMOVE_CATEGORY_FROM_FILTER = "REMOVE_CATEGORY_FROM_FILTER";

export const addCategoryToFilter = (category) => {
  return {
    type: ADD_CATEGORY_TO_FILTER,
    category,
  };
};

export const removeCategoryFromFilter = (category) => {
  return {
    type: REMOVE_CATEGORY_FROM_FILTER,
    category,
  };
};

export const PREV_PAGE = "PREV_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";
export const GO_PAGE = "GO_PAGE";
export const COUNT_ITEM = "COUNT_ITEM";

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const prevPage = () => {
  return {
    type: PREV_PAGE,
  };
};

export const goPage = (n) => {
  return {
    type: GO_PAGE,
    currentPage: n,
  };
};

export const countItem = (n) => {
  return {
    type: COUNT_ITEM,
    totalItemsCount: n,
  };
};
