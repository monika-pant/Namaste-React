import React from "react";
import ReactDOM from "react-dom";

/****
 * Header
 *      - Logo
 *      - Nav items
 * Body
 *      - Search
 *      - RestaurantContsiner
 *      - RestaurantCard
 * Footer
 *      - copyright
 *      - Links
 *      - Address
 *      - Contact
 */
import "./index.css";
const Header = () => {
  return (
    <>
      <div className="HeaderContainer">
        <div className="logo">
          <img src="https://img.freepik.com/free-vector/delivery-logo-template_23-2147880262.jpg"></img>
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
const AppBody = () => {
  return (
    <>
      <div className="CardContainer"></div>
    </>
  );
};
const Footer = () => {
  return (
    <>
      <ul>
        <li>copyright</li>
      </ul>
    </>
  );
};
const AppLayoutComponent = () => {
  return (
    <>
      <Header />
      <AppBody />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
