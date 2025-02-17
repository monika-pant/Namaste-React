import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnString, setBtnString] = useState("Login");
  /**when there is no dependency array, useeffect is called every time the compoennet renders
use effect is called on initial render and just once when the dependency array is empty array[]
if we put something inside the dependency array is present , useffect is called every time the dependency changes
**/
  // useEffect(()=>{
  //   console.log("use effect called");
  // })
  // console.log(useState());
  const onlineStatus = useOnlineStatus();

  return (
    <>
      <div className="flex justify-between  bg-amber-800 shadow-amber-900 p-4 text-amber-100 shadow-2xl">
        <div className="w-45">
          <img src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-4">
            <li>Online Status: {onlineStatus ? "✅" : "🔴"} </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  btnString === "Log in"
                    ? setBtnString("LogOut")
                    : setBtnString("Log in");
                }}
              >
                {btnString}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
