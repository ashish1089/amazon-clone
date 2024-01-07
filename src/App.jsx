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
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
              </>
            }
          />
          <Route
            path="/"
            element={
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
