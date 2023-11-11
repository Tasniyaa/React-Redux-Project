import "./App.css";
import Header from "./component/layout/Header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useState } from "react";
import Footer from "./component/layout/Footer/Footer.jsx";
import Home from "./component/Home/Home.jsx";
import ProductDetails from "./component/Product/ProductDetails.jsx";
import Products from "./component/Product/Products.jsx";
import Search from "./component/Product/Search.jsx";
import LoginSignup from "./component/User/LoginSignup";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.jsx";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.jsx";
import UpdateProfile from "./component/User/UpdateProfile.jsx";
import UpdatePassword from "./component/User/UpdatePassword.jsx";
import ForgotPassword from "./component/User/ForgotPassword.jsx";
import ResetPassword from "./component/User/ResetPassword.jsx";
import Cart from "./component/Cart/Cart.jsx";
import Wishlist from "./component/Cart/Wishlist.jsx";
import Shipping from "./component/Cart/Shipping.jsx";
import ConfirmOrder from "./component/Cart/ConfirmOrder.jsx";
import axios from "axios";
import Payment from "./component/Cart/Payment.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.jsx";
import MyOrders from "./component/Order/MyOrders.jsx";
import OrderDetails from "./component/Order/OrderDetails.jsx";
import Dashboard from "./component/Admin/Dashboard.jsx";
import ProductList from "./component/Admin/ProductList.jsx";
import NewProduct from "./component/Admin/NewProduct.jsx";
import UpdateProduct from "./component/Admin/UpdateProduct.jsx";
import OrderList from "./component/Admin/OrderList.jsx";
import ProcessOrder from "./component/Admin/ProcessOrder.jsx";
import UsersList from "./component/Admin/UsersList.jsx";
import UpdateUser from "./component/Admin/UpdateUser.jsx";
import ProductReviews from "./component/Admin/ProductReviews.jsx";
import About from "./component/layout/About/About.jsx";
import Contact from "./component/layout/Contact/Contact.jsx";
import NotFound from "./component/layout/Not Found/NotFound.jsx";
import webpackConfig from "./webpack.config";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header /> {isAuthenticated && <UserOptions user={user} />}{" "}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/product/:id" element={<ProductDetails />} />{" "}
        <Route path="/products" element={<Products />} />{" "}
        <Route path="/products/:keyword" element={<Products />} />{" "}
        <Route path="/search" element={<Search />} />{" "}
        <Route path="/login" element={<LoginSignup />} />{" "}
        <Route
          path="/account"
          element={isAuthenticated ? <Profile /> : <LoginSignup />}
        />{" "}
        <Route
          path="/me/update"
          element={isAuthenticated ? <UpdateProfile /> : <LoginSignup />}
        />{" "}
        <Route
          path="/password/update"
          element={isAuthenticated ? <UpdatePassword /> : <LoginSignup />}
        />{" "}
        <Route path="/password/forgot" element={<ForgotPassword />} />{" "}
        <Route path="/password/reset/:token" element={<ResetPassword />} />{" "}
        <Route path="/cart" element={<Cart />} />{" "}
        <Route
          path="/wishlist"
          element={isAuthenticated ? <Wishlist /> : <LoginSignup />}
        />{" "}
        <Route
          j
          path="/shipping"
          element={isAuthenticated ? <Shipping /> : <LoginSignup />}
        />{" "}
        <Route
          path="/order/confirm"
          element={isAuthenticated ? <ConfirmOrder /> : <LoginSignup />}
        />{" "}
        <Route
          path="/process/payment"
          element={
            isAuthenticated ? (
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            ) : (
              <LoginSignup />
            )
          }
        />{" "}
        {/* {stripeApiKey && (
                                                      <Elements stripe={loadStripe(stripeApiKey)}>
                                                        <Route
                                                          path="/process/payment"
                                                          element={isAuthenticated ? <Payment /> : <LoginSignup />}
                                                        />
                                                      </Elements>
                                                    )} */}{" "}
        <Route
          path="/success"
          element={isAuthenticated ? <OrderSuccess /> : <LoginSignup />}
        />{" "}
        <Route
          path="/orders"
          element={isAuthenticated ? <MyOrders /> : <LoginSignup />}
        />{" "}
        <Route
          path="/order/:id"
          element={isAuthenticated ? <OrderDetails /> : <LoginSignup />}
        />{" "}
        <Route
          path="/admin/dashboard"
          element={
            isAuthenticated && user.role === "admin" ? (
              <Dashboard />
            ) : (
              <LoginSignup />
            )
          }
        />{" "}
        <Route
          path="/admin/products"
          element={
            isAuthenticated && user.role === "admin" ? (
              <ProductList />
            ) : (
              <LoginSignup />
            )
          }
        />{" "}
        <Route
          path="/admin/product"
          element={
            isAuthenticated && user.role === "admin" ? (
              <NewProduct />
            ) : (
              <LoginSignup />
            )
          }
        />{" "}
        <Route
          path="/admin/product/:id"
          element={
            isAuthenticated && user.role === "admin" ? (
              <UpdateProduct />
            ) : (
              <LoginSignup />
            )
          }
        />{" "}
        <Route
          path="/admin/orders"
          element={
            isAuthenticated && user.role === "admin" ? (
              <OrderList />
            ) : (
              <LoginSignup />
            )
          }
        />{" "}
        <Route
          path="/admin/order/:id"
          element={
            isAuthenticated && user.role === "admin" ? (
              <ProcessOrder />
            ) : (
              <LoginSignup />
            )
          }
        />{" "}
        <Route
          path="/admin/users"
          element={
            isAuthenticated && user.role === "admin" ? (
              <UsersList />
            ) : (
              <LoginSignup />
            )
          }
        />{" "}
        <Route
          path="/admin/user/:id"
          element={
            isAuthenticated && user.role === "admin" ? (
              <UpdateUser />
            ) : (
              <LoginSignup />
            )
          }
        />{" "}
        <Route
          path="/admin/reviews"
          element={
            isAuthenticated && user.role === "admin" ? (
              <ProductReviews />
            ) : (
              <LoginSignup />
            )
          }
        />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>{" "}
      <Footer />
    </Router>
  );
}

export default App;
