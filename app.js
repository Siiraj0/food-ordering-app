import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div id="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestuarentCard = (props) => {
  console.log(props);
  
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"
      />
      <h3>{props.resName}</h3>
      <h4>{props.Cuisine}</h4>
      <h4>⭐ 4.5</h4>
      <h4>⏳ 25 min</h4>
    </div>
  );
};


const resObj = {
  "id": "671928",
  "name": "KFC",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
  "locality": "7th Block",
  "areaName": "Koramangla",
  "costForTwo": "₹400 for two",
  "cuisines": ["Burgers", "Fast Food", "Rolls & Wraps"],
  "avgRating": 4.3,
  "parentId": "547",
  "avgRatingString": "4.3",
  "totalRatingsString": "4.1K+",
  "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 1.2,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "1.2 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2025-03-08 02:00:00",
    "opened": true
  },
  "isOpen": true,
  "type": "F",
  "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹59"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "lottie": {},
      "video": {}
    }
  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
};

const Body = () => {
  return (
    <div className="Body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestuarentCard
          resName="Meghna Food"
          Cuisine="Biriyani, North Indian . Asian"
        />
        <RestuarentCard resName="KFC" Cuisine="Burger , Fast Food" />
      </div>
    </div>
  );
};
 
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
