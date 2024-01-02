import "../styles/Home.css";
import Product from "./Product.jsx";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses [Paperback] Ries, Eric"
          price={502}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id="2"
          title="Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black)"
          price={587}
          image="https://m.media-amazon.com/images/I/41uGjvXbeBL._AC_SR400,600_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="The Indus Valley Pre-Seasoned Cast Iron Tawa for Dosa/Chapathi"
          price={999}
          image="https://m.media-amazon.com/images/I/41RfWmdZ4uL._AC_SR400,600_.jpg"
          rating={3}
        />
        <Product
          id="4"
          title="Apple iPhone 13 (128GB) - (Product) RED"
          price={52999}
          image="https://m.media-amazon.com/images/I/71gm8v4uPBL._SX679_.jpg"
          rating={4}
        />
        <Product
          id="5"
          title="Apple 2021 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Grey (9th Generation)"
          price={30900}
          image="https://m.media-amazon.com/images/I/61NGnpjoRDL._SX466_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold"
          price={83990}
          image="https://m.media-amazon.com/images/I/71vFKBpKakL._SX522_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}
