import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState([]);
  const [resName, setResName] = useState("");
  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const cards = data?.data?.cards;
      const { itemCards } =
        cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

      setResMenu(itemCards);
      setResName(data?.data?.cards[0]?.card?.card?.text);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  if (resMenu?.length === 0) return <Shimmer />;
  return (
    <>
      <div className="menu">
        <h1>{resName}</h1>
        <h2>menu</h2>
        <ul>
          {resMenu?.map((item) => {
            return (
              <li key={item?.card?.info?.id}>
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
