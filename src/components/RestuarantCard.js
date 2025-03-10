import { CDN_URL } from "../utils/contants";

// Restaurant Card Component
const RestuarentCard = ({ resData }) => {
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt={resData.name}
          src={CDN_URL + resData.cloudinaryImageId}/>
        <h3>{resData.name}</h3>
        <h4>{resData.cuisines?.join(", ") || "N/A"}</h4>
        <h4>⭐ {resData.avgRating || "No Rating"}</h4>
        <h4>₹{resData.costForTwo / 100}</h4>
        <h4>🚴 {resData.sla?.deliveryTime} mins • {resData.sla?.lastMileTravel} km away</h4>
        {/* <h4>📍 {resData.locality}, {resData.areaName}</h4>
        <h4>🎉 {resData.aggregatedDiscountInfoV3?.header} {resData.aggregatedDiscountInfoV3?.subHeader}</h4>
        <h4 className={resData.availability.opened ? "open" : "closed"}>
          {resData.availability.opened ? "🟢 Open Now" : "🔴 Closed"}
        </h4> */}
      </div>
    );
  };


  export default RestuarentCard;