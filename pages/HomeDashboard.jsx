import NavigationPanel from "../src/components/navigationpanel";
import { useState } from "react";

function HomeDahboard() {
  return (
    <div className="flex w-screen h-screen bg-limewhite ">
      <div className="pt-[240px] bg-white h-full">
        <NavigationPanel />
      </div>
      <div className="" id="details">
      </div>
    </div>
  );
}

export default HomeDahboard;
