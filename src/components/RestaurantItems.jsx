import { useState } from "react";
import ItemData from "./ItemData";
const RestaurantItems = ({ data, showItemsData, setShowIndex }) => {
  function handleToggle() {
    //lifting the state up, here the function from parent componnet will be called via props
    return setShowIndex();
  }
  return (
    <>
      <div className="m-auto shadow-xl mb-4 w-6/12 bg-amber-50">
        <div className="flex justify-between header" onClick={handleToggle}>
          <div className="mt-2 mb-2 p-2 font-bold">
            {data.card.card.title} ({data?.card?.card?.itemCards.length})
          </div>
          <span className="p-4">⌄</span>
        </div>
        {showItemsData && <ItemData items={data?.card?.card?.itemCards} />}
      </div>
    </>
  );
};
export default RestaurantItems;
