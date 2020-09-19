import React from "react";
import "../Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon-logo"
        className="header__brandImage"
      />

      <dv className="header__search">
        <input className="header__searchInput" type="text" name="" id="" />
        <SearchIcon className="header__searchIcon" />
      </dv>

      <div className="header__nav">
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Hello Guest</span>
          <span className="header__navOptionLineTwo">Sign In</span>
        </div>
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Returns</span>
          <span className="header__navOptionLineTwo">Orders</span>
        </div>
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Your</span>
          <span className="header__navOptionLineTwo">Prime</span>
        </div>
        <div className="header__navOptionBasket">
          <ShoppingBasketIcon />
          <span className="header_navOptionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
