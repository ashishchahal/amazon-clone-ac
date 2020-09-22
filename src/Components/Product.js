import React from "react";
import "../Styles/Product.css";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const history = useHistory();
  const [{ user, basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    user
      ? dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        })
      : history.push("./login");
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
