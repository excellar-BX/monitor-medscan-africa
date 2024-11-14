import {
  HomeButton,
  ProductButton,
  ManufacturerButton,
  SettingsButton,
} from "../src/components/sidebarButtons";
import { useState } from "react";

function HomeDahboard() {
  const [active, setactive] = useState({
    active: true,
    id: 1,
  });

  const clickaction = (id) => {
    setactive({
      active: true,
      id: id,
    });
  };

  return (
    <div className="flex  h-screen ">
      <div className="flex flex-col relative h-screen " id="sidebar">
        <ul className="absolute top-[220px]">
          <li
            onClick={() => {
              clickaction(1);
            }}
          >
            <HomeButton active={active} />
          </li>
          <li
            onClick={() => {
              clickaction(2);
            }}
          >
            <ProductButton active={active} />
          </li>
          <li
            onClick={() => {
              clickaction(3);
            }}
          >
            <ManufacturerButton active={active} />
          </li>
          <li
            onClick={() => {
              clickaction(4);
            }}
          >
            <SettingsButton active={active} />
          </li>
        </ul>
      </div>
      <div className="" id="details"></div>
    </div>
  );
}

export default HomeDahboard;
