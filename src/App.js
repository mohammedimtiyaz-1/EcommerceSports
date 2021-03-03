import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Checkout from "./pages/Checkout/Checkout";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => {
                return <Redirect to={"/products"} />;
              }}
            />
            <Route exact path={"/products"} component={Home} />
            <Route exact path={"/checkout"} component={Checkout} />
            <Route exact path={"/products/:id"} component={ProductDetail} />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
