import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router";
const AppBody = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const API_URL =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.317794453250343&lng=78.03602656428693&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      const data = await fetch(API_URL);
      const json = await data.json();
      //use optional chaining as a safe code, such there we dont break application in case data is not available in nested object
      const restaurantsData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurantList(restaurantsData);
      setFilteredRestaurant(restaurantsData);
    } catch (error) {
      console.log(error);
    }
  };
  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>seems u r offline!! check ur internet</h1>;
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="appBody">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                //need to filter the data
                const data = filterData(searchText, restaurantList);
                // console.log(data);
                setFilteredRestaurant(data);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              filteredRestaurantList = restaurantList.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              console.log("button clicked", restaurantList);
              setRestaurantList(filteredRestaurantList);
            }}
          >
            top Rated Restaurants
          </button>
        </div>
        <div className="filter">
          <button
            onClick={() => {
              setRestaurantList(resList);
            }}
          >
            Refresh List
          </button>
        </div>
        {/* <div className="search">Search</div> */}
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => {
            return (
              // not using key(NA) << index as key << unique id from an API use as key,
              // as this will allow react to efficiently render the DOM tree
              <Link
                to={"/restaurants/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default AppBody;
