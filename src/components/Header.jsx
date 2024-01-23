import "../../styles/components/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { signOut } from "firebase/auth"
import { auth } from "../firebase";

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  function handleAuthentication() {
    if (user) {
      signOut(auth);
    }
  }

  function extractNameFromEmail(email) {
    const atIndex = email.indexOf("@");

    return atIndex !== -1 ? email.slice(0, atIndex) : "";
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon__logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? extractNameFromEmail(user.email) : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "SignIn"}
            </span>
          </div>
        </Link>
        <Link to={user? '/orders': 'login'}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
