import React from "react";
import "./CarItem.css";
import { assets } from "../../assets/assets";

const CarItem = ({ id, name, price, description, image }) => {
  return (
    <div className="car-item">
      <div className="car-item-img-container">
        <img className="car-item-image" src={image} alt="" />
      </div>
      <div className="car-item-info">
        <div className="car-item-name-rating">
          <p>{name}</p>
          {/* <img src={assets.rating_starts} alt="" /> */}
        </div>
        <p className="car-item-desc">{description}</p>
        <p className="car-item-price">${price}</p>
      </div>
    </div>
  );
};

export default CarItem;
