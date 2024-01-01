import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
