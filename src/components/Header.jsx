import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnString, setBtnString] = useState("Login");
  return (
    <>
      <div className="HeaderContainer">
        <div className="logo">
          <img src={LOGO_URL}></img>
        </div>
        <div className="NavItems">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Cart</li>
            <li>
              <button
                onClick={() => {
                  btnString === "Login"
                    ? setBtnString("Logout")
                    : setBtnString("Logoin");
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
