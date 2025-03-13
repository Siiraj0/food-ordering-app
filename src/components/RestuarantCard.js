import { CDN_URL } from "../utils/contants";

// Restaurant Card Component
const RestuarentCard = ({ resData }) => {
  const { info } = resData; // Extract `info` object

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt={info?.name || "Restaurant Image"}
        src={CDN_URL + info?.cloudinaryImageId}
      />
      <h3>{info?.name || "Unknown Restaurant"}</h3>
      <h4>{info?.cuisines?.join(", ") || "N/A"}</h4>
      <h4>⭐ {info?.avgRating || "No Rating"}</h4>
      <h4>₹{info?.costForTwo?.replace("₹", "") || "N/A"}</h4>
      <h4>🚴 {info?.sla?.deliveryTime || "N/A"} mins • {info?.sla?.lastMileTravel || "N/A"} km away</h4>
    </div>
  );
};

export default RestuarentCard;
