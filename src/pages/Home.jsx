import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      {/* <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p> */}
      <ul>
        <li>
          <Link to="/homepage">Homepage</Link>
        </li>
        <li>
          <Link to="/homepagepopups">HomepagePopups</Link>
        </li>
        <li>
          <Link to="/homepageuserpopups">HomepageUserPopups</Link>
        </li>
        <li>
          <Link to="/homepageshoppingcartpopup">HomepageShoppingCartPopup</Link>
        </li>
        <li>
          <Link to="/shoppage">ShopPage</Link>
        </li>
        <li>
          <Link to="/productdetail">ProductDetail</Link>
        </li>
        <li>
          <Link to="/trackorder">TrackOrder</Link>
        </li>
        <li>
          <Link to="/trackorderdetails">TrackOrderDetails</Link>
        </li>
        <li>
          <Link to="/compare">Compare</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/shoppingcard">ShoppingCard</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/checkoutsuccess">CheckoutSuccess</Link>
        </li>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
        <li>
          <Link to="/forgetpassword">ForgetPassword</Link>
        </li>
        <li>
          <Link to="/resetpassword">ResetPassword</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/emailverification">EmailVerification</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li>
          <Link to="/errorpage">ErrorPage</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
        <li>
          <Link to="/customersupport">CustomerSupport</Link>
        </li>
        <li>
          <Link to="/bloglist">BlogList</Link>
        </li>
        <li>
          <Link to="/blogdetail">BlogDetail</Link>
        </li>
        <li>
          <Link to="/dasboard">Dasboard</Link>
        </li>
        <li>
          <Link to="/dasboardorderhistory">DasboardOrderHistory</Link>
        </li>
        <li>
          <Link to="/dasboardorderdetail">DasboardOrderDetail</Link>
        </li>
        <li>
          <Link to="/dasboardcardsaddress">DasboardCardsAddress</Link>
        </li>
        <li>
          <Link to="/dasboardbrowsinghistory">DasboardBrowsingHistory</Link>
        </li>
        <li>
          <Link to="/dasboardsetting">DasboardSetting</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
