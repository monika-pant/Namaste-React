import { ITEM_IMG_URL } from "../utils/constants";
const ItemData = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, name, description, imageId, price, defaultPrice } =
          item?.card?.info;
        return (
          <div className="p-4 border-b-1 m-4 bg-grey" key={id}>
            <label className="font-bold">{name}</label>
            <div className="font-bold">₹ {(price || defaultPrice) / 100}</div>
            <div className="flex ">
              <div className="p-2 m-2 text-xs w-4/5">{description}</div>
              <div className="w-1/5 relative">
                {" "}
                <img
                  className="w-full h-30 rounded-2xl"
                  src={ITEM_IMG_URL + imageId}
                />
                <button className="absolute bg-amber-950 text-white p-2 rounded-b-lg bottom-0 w-full opacity-80">
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ItemData;
