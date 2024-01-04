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
          title="Atomic Habits: the life-changing million-copy #1 bestseller"
          price={184}
          image="https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg"
          rating={5}
        />
        <Product
          id="2"
          title="Premier Stainless Steel Kettle PGK-102S (SS), 1.2 LTR (code-054012)"
          price={1160}
          image="https://m.media-amazon.com/images/I/31RZA6pdjXS._AC_SY200_.jpg"
          rating={4}
        />
        <Product
          id="3"
          title="Galaxy Z Flip5 5G (Mint, 8GB RAM, 256GB Storage)"
          price={99999}
          image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._AC_UY327_FMwebp_QL65_.jpg"
          rating={4}
        />
        <Product
          id="4"
          title="Apple iPhone 13 (128GB) - (Product) RED"
          price={52999}
          image="https://m.media-amazon.com/images/I/71gm8v4uPBL._SX679_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="5"
          title="Apple 2021 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Grey (9th Generation)"
          price={30900}
          image="https://m.media-amazon.com/images/I/61NGnpjoRDL._SX466_.jpg"
          rating={4}
        />
        <Product
          id="6"
          title="Grant Sport Analog Blue Dial Men's Watch-FS5237"
          price={8121}
          image="https://m.media-amazon.com/images/I/81Q7WuKlezL._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
        />
        <Product
          id="6"
          title="Yoga Slim7 Carbon Intel Evo i7 1260P 13.3 (33.78cm) QHD 400Nit Touch Laptop(16GB/1TB SSD/Win 11/Office 2021/Backlit KB/IR Cam/3Yr Warranty/Alexa/3 Month Game Pass/Moon White"
          price={83990}
          image="https://m.media-amazon.com/images/I/61OmYRccCzL._AC_UY327_QL65_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">

      <Product
          id="7"
          title="The Indus Valley Super Smooth Cast Iron Tawa for Dosa/Chapathi"
          price={1099}
          image="https://m.media-amazon.com/images/I/41ZiNufv4fL._AC_SY200_.jpg"
          rating={4}
        />
        <Product
          id="8"
          title="MB-Vite Daily Multivitamin with 51 Ingredients and 6 Essential Blends"
          price={499}
          image="https://m.media-amazon.com/images/I/4119sh667cL._AC_SR400,600_.jpg"
          rating={4}
        />
        <Product
          id="9"
          title="[2 Pack] Mini USB Type C Adapter Plug, Type C Female to USB A Male Charger"
          price={198}
          image="https://m.media-amazon.com/images/I/3172BJyynBS._AC_SR400,600_.jpg"
          rating={4}
        />
        <Product
          id="10"
          title="Men's Tarzan-11 White Casual Sneaker High-Neck Shoes"
          price={799}
          image="https://m.media-amazon.com/images/I/41JvGgDobKL._AC_SR400,600_.jpg"
          rating={3}
        />
        <Product
          id="11"
          title="GARBNOIRE 12 INCH Stainless Steel Towel Bar | Bathroom Towel Rod Holder"
          price={799}
          image="https://m.media-amazon.com/images/I/3166Bki7BrL._AC_SR400,600_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}
