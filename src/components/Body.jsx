import RestuarentCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// Body Component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  console.log(listOfRestaurants, "listOfRestaurants");

  const [filteredRestaurant, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  console.log("body rendered");

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
  
      const restaurants = json?.data?.cards?.flatMap(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
  
      if (!restaurants || restaurants.length === 0) {
        console.warn("No restaurant data found.");
        setListOfRestaurants([]);
        return;
      }
  
      // Remove duplicate restaurants based on ID
      const uniqueRestaurants = Array.from(
        new Map(restaurants.map((res) => [res.info.id, res])).values()
      );
  
      console.log("Extracted Restaurants:", uniqueRestaurants); // Debug restaurant data
  
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
      {filteredRestaurant?.length > 0 ? (
  filteredRestaurant.map((restaurant) => (
    <RestuarentCard key={restaurant.info.id} resData={restaurant} />
  ))
) : (
  <p>No restaurants available.</p>
)}

      </div>
    </div>
  );
};

export default Body;
