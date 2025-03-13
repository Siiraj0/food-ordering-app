import RestuarentCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// Body Component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await response.json();

      // Collect all restaurants from all relevant cards
      const restaurants = json?.data?.cards?.flatMap(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );

      if (!restaurants || restaurants.length === 0) {
        console.warn("No restaurant data found.");
        setListOfRestaurants([]); // Set empty list if no data found
        return;
      }

      setListOfRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

     

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restuarent
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestuarentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
