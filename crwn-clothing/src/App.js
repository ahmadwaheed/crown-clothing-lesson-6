import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

//exact: if we use exact within the Route, it will derender that component when we are trying to render other components.
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
