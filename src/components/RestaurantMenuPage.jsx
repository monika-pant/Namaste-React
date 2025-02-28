import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantItems from "./RestaurantItems";
import { useState } from "react";

const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const restaurantName = resInfo?.cards[0]?.card?.card?.text;
  const [showIndex, setShowIndex] = useState(0);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const toggleFunction = (index) => {
    /**
     *  I want to modify my parent component, which is this component from my child component
     * which is the  <RestaurantItems/> component */
    setShowIndex(index);
  };
  if (categories === null) return <Shimmer />;
  return (
    <>
      <div className="p-5">
        <h1 className="font-bold text-center">{restaurantName}</h1>
        <h2 className="font-bold capitalize text-center">menu</h2>
        {categories?.map((category, index) => {
          return (
            //controlled component because we are passing `showItemsData` to control the show hide state of the component
            <RestaurantItems
              data={category}
              key={category.card.card.categoryId}
              showItemsData={index === showIndex ? true : false}
              setShowIndex={() => toggleFunction(index)}
            />
          );
        })}
      </div>
    </>
  );
};
export default RestaurantMenuPage;
