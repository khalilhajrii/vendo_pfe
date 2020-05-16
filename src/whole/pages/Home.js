import React from "react";
import IconBar from "./components/IconsBar";
import Slide from "./components/Slide";
import NewArrivals from "./components/NewArrivals";
import BarContent from "./components/BarContent";
import BarContent2 from "./components/BarContent2";
import Categories from "./components/Categories";
const Home = () => {
  return (
    <div>
      <Slide />
      <IconBar />
      <Categories />
      <NewArrivals />
      <BarContent2 />
      <BarContent />
    </div>
  );
};

export default Home;
