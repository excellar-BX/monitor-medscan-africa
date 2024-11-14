import {
  HomeButton,
  ProductButton,
  ManufacturerButton,
  SettingsButton,
} from "../components/sidebarButtons";
import { useState } from "react";

function NavigationPanel() {
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
    <nav className="flex-col w-[294px] " id="sidebar">
      <div
        onClick={() => {
          clickaction(1);
        }}
      >
        <HomeButton active={active} />
      </div>
      <div
        onClick={() => {
          clickaction(2);
        }}
      >
        <ProductButton active={active} />
      </div>
      <div
        onClick={() => {
          clickaction(3);
        }}
      >
        <ManufacturerButton active={active} />
      </div>
      <div
        onClick={() => {
          clickaction(4);
        }}
      >
        <SettingsButton active={active} />
      </div>
    </nav>
  );
}

export default NavigationPanel;
