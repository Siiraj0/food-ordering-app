import RestuarentCard from "./RestuarantCard";
import resList from "../utils/mockData";

// Body Component
const Body = () => {
  return (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
          }}
          
        >
          Top Rated Restuarent
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestuarentCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
