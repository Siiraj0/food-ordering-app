import RestuarentCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// Body Component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  console.log(listOfRestaurants,'listOfRestaurants');
  

  const [filteredRestaurant, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await response.json();

      // Extract all restaurant data from API response
      const restaurants = json?.data?.cards?.flatMap(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );

      if (!restaurants || restaurants.length === 0) {
        console.warn("No restaurant data found.");
        setListOfRestaurants([]);
        return;
      }

      // ✅ Remove duplicate restaurants based on ID
      const uniqueRestaurants = Array.from(
        new Map(restaurants.map((res) => [res.info.id, res])).values()
      );

      setListOfRestaurants(uniqueRestaurants);
      setFilteredRestaurants(uniqueRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restuarent
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestuarentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
