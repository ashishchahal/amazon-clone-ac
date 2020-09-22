import React from "react";
import "../Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
          className="header__brandImage"
        />
      </Link>

      <dv className="header__search">
        <input className="header__searchInput" type="text" name="" id="" />
        <SearchIcon className="header__searchIcon" />
      </dv>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__navOption" onClick={handleAuthentication}>
            <span className="header__navOptionLineOne">
              {user ? `Hello ${user.email}` : "Hello User"}
            </span>
            <span className="header__navOptionLineTwo">
              {user ? "Log out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__navOption">
          <span className="header__navOptionLineOne">Returns</span>
          <span className="header__navOptionLineTwo">Orders</span>
        </div>
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Your</span>
          <span className="header__navOptionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__navOptionBasket">
            <ShoppingBasketIcon />
            <span className="header_navOptionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
