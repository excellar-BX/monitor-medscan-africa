import Header from "../src/components/Header";
import NavigationPanel from "../src/components/navigationpanel";
import SearchBar from "../src/components/searchbar";
import { useState } from "react";

function HomeDahboard() {
  return (
    <div className="flex w-screen h-screen bg-limewhite  ">
      <div className="pt-[240px] bg-white h-full">
        <NavigationPanel />
      </div>
      <div className="" id="details">
        <Header />
      </div>
    </div>
  );
}

export default HomeDahboard;
