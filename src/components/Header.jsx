import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;