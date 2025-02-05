import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import AppBody from "./components/AppBody";

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
