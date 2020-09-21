import React from "react";
import "../Styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          {/* Product */}
          <Product
            id="12321341"
            title="the Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            rating={3}
            price="29.99"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC-SY400_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood Mix Stand Mixer for Baking, sylish Kitchen Mixer with K-veater, Dough Hook & Whisk, 5 Litre Glass Bowl"
            rating={4}
            price="239"
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC-SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Smart Watch Realme"
            rating={3}
            price="199.99"
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC-SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo"
            rating={5}
            price="98.99"
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="Apple Ipad Pro (12.9 inch, Wi-fi, 128GB) - Silver"
            rating={5}
            price="598.99"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC-SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG9SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1Z"
            rating={4}
            price="1099.99"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC-SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
