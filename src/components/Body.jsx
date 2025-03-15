import RestuarentCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// Body Component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.1556686&lng=75.891155&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await response.json();
      console.log("Full API Response:", json); // Debug API response

      // Extract restaurant data properly
      const restaurants =
        json?.data?.cards?.flatMap(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        ) || [];

      console.log("Extracted Raw Restaurants:", restaurants);

      if (!restaurants.length) {
        console.warn("No restaurant data found.");
        setListOfRestaurants([]);
        return;
      }

      // Remove duplicate restaurants based on ID
      const uniqueRestaurants = Array.from(
        new Map(restaurants.map((res) => [res.info.id, res])).values()
      );

      console.log("Final Processed Restaurants:", uniqueRestaurants); // Debug final data

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
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              console.log("Search for:", searchText);
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
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestuarentCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <p>No restaurants available.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
