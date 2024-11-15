import Header from "../src/components/Header";
import NavigationPanel from "../src/components/navigationpanel";
import SearchBar from "../src/components/searchbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";


function HomeDahboard() {
  return (
    <div className="flex w-screen h-screen overflow-x-hidden overflow-y-hidden bg-limewhite  ">
      <div className="pt-[170px] bg-white h-full">
        <NavigationPanel />
      </div>
      <div className="overflow-y-auto" id="details">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeDahboard;
