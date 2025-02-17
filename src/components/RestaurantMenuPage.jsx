import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const resName = resInfo?.cards[0]?.card?.card?.text;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .itemCards;

  if (itemCards === null) return <Shimmer />;
  return (
    <>
      <div className="p-5">
        <h1 className="font-bold text-center">{resName}</h1>
        <h2 className="font-bold capitalize text-center">menu</h2>
        <ul className="list-none ">
          {itemCards?.map((item) => {
            return (
              <li
                className="p-4 bg-amber-600 mt-10 hover:bg-amber-800 rounded-2xl text-amber-50"
                key={item?.card?.info?.id}
              >
                {item?.card?.info?.name} - Rs{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default RestaurantMenuPage;
