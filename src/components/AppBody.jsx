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
      <div className="p-10 m-auto">
        <div className="filter">
          <div className="m-4 p-4 flex gap-4 text-amber-50">
            <div>
              <input
                type="text"
                value={searchText}
                className="border border-amber-700 p-2 text-amber-950"
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="bg-amber-600 p-2.5 rounded-r-lg hover:bg-amber-800 cursor-pointer"
                onClick={() => {
                  //need to filter the data
                  const data = filterData(searchText, restaurantList);
                  setFilteredRestaurant(data);
                }}
              >
                Search
              </button>
            </div>
            <div className="flex gap-4">
              <button
                className="bg-amber-600 p-2 rounded-[4px] hover:bg-amber-800 cursor-pointer"
                onClick={() => {
                  filteredRestaurantList = restaurantList.filter(
                    (restaurant) => restaurant.info.avgRating > 4
                  );
                  setFilteredRestaurant(filteredRestaurantList);
                }}
              >
                top Rated Restaurants
              </button>
              <button
                className="bg-amber-600 p-2 rounded-[4px] hover:bg-amber-800 cursor-pointer"
                onClick={() => {
                  setFilteredRestaurant(restaurantList);
                }}
              >
                Refresh List
              </button>
            </div>
          </div>
        </div>
        {/* <div className="search">Search</div> */}
        <div className="flex gap-5 flex-wrap">
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
