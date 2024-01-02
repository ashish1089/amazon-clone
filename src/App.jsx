import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

export default function App() {
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
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
