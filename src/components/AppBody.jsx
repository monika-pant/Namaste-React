import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const AppBody = () => {
  
  const [restaurantList, setRestaurantList] = useState(resList)
  
  return (
    <>
      <div className="appBody"></div>
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          filteredRestaurantList = restaurantList.filter(
            (restaurant)=>restaurant.info.avgRating>4);
          console.log("button clicked", restaurantList);
          setRestaurantList(filteredRestaurantList);
          }}>
          top Rated Restaurants
          </button>
      </div>
      <div className="filter">
        <button onClick={()=>{
          setRestaurantList(resList);
        }}>
          Refresh List
        </button>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="res-container">
        {restaurantList.map((restaurant) => {
          return (
            // not using key(NA) << index as key << unique id from an API use as key,
            // as this will allow react to efficiently render the DOM tree
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
      </div>
    </>
  );
};
export default AppBody;