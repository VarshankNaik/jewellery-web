import React from "react";
import "./CarItem.css";

const CarItem = ({ id, name, price, description, image }) => {
  // Hardcoded owner's WhatsApp number in international format
  const ownerPhoneNumber = "9096219091"; // Replace with the actual phone number

  // Constructing the message with a link to the image
  const message = `I'm interested in the car ${name} priced at $${price}. Here are the details: ${description}.`;

  // WhatsApp link with the pre-filled message
  const whatsappRedirect = `https://wa.me/${ownerPhoneNumber}?text=${encodeURIComponent(message)}`;

  // Handling the image click to open WhatsApp chat with the pre-filled message
  const handleImageClick = () => {
    window.open(whatsappRedirect, "_blank"); // Opens the WhatsApp chat in a new tab or window
  };

  return (
    <div className="car-item">
      <div className="car-item-img-container" onClick={handleImageClick}>
        <img className="car-item-image" src={image} alt={`Image of ${name}`} />
      </div>
      <div className="car-item-info">
        <div className="car-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="car-item-desc">{description}</p>
        <p className="car-item-price">${price}</p>
      </div>
    </div>
  );
};

export default CarItem;
