import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import "../styles/App.css";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe("pk_test_51OVr9USEE6F3evz8DPWsMubXFkxqeWjl1o3B8meKz0AwoFHhDRM2tvlW1KcInQjdYT6HSgNNnoBDVRhRQymTYC5M00S1LXcBHw");

export default function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      // console.log("The user is :", authUser.email);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        // setAuthUser(user)
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })

      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/orders" element={
            <>
              <Header />
              <Orders />
            </>
          }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>
          }
          />
          <Route path="/payment" element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
          />
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
