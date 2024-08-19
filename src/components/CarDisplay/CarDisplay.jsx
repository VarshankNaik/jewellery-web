import React, { useContext } from "react";
import "./CarDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import CarItem from "../CarItem/CarItem";

const CarDisplay = ({ category }) => {

  const {food_list} = useContext(StoreContext)

  return (
    <div className="car-display" id="car-display">
      <h2>Top selling</h2>
      <div className="car-display-list">
        {food_list.map((item, index) => {
          if (category==="All" || category===item.category) {
            return (
              <CarItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          } 
        })}
      </div>
    </div>
  );
};

export default CarDisplay;
