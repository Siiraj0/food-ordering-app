import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;
console.log("suiiii");

  console.log("🐞 Full API Response:", resInfo); // <== Debug here

  // Safely find restaurant info
  const cardWithInfo = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  );

  const info = cardWithInfo?.card?.card?.info || {};
  const name = info.name || "Restaurant Name";
  const cuisines = Array.isArray(info.cuisines) ? info.cuisines : [];
  const costForTwoMessage = info.costForTwoMessage || "N/A";

  // Extract menu items
  const menuSection = resInfo?.cards?.find((card) => card?.groupedCard);
  const itemCards =
    menuSection?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
      (section) => section?.card?.card?.itemCards || []
    ) || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>

      <h2>Menu Items</h2>
      {itemCards.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - ₹
              {(item.card.info.defaultPrice || item.card.info.price) / 100}
            </li>
          ))}
        </ul>
      )}

      {/* 🔍 Debug Output at the bottom
      <div style={{ marginTop: "2rem", background: "#eee", padding: "1rem" }}>
        <h3>🔍 Debug Output</h3>
        <pre>{JSON.stringify(resInfo, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
