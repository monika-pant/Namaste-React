import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const AppBody = () => {
  return (
    <>
      <div className="appBody"></div>
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => {
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