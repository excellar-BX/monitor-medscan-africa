import { Outlet, Link } from "react-router-dom";
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
    <nav className="flex-col w-[264px] " id="sidebar">
      <div
        onClick={() => {
          clickaction(1);
        }}
      >
        <Link to={`/Home`} ><HomeButton active={active} /></Link>
      </div>
      <div
        onClick={() => {
          clickaction(2);
        }}
      >
        <Link to={`/Product`} >
        <ProductButton active={active} />
        </Link>
      </div>
      <div
        onClick={() => {
          clickaction(3);
        }}
      >
        <Link to={`/manufacturers`} ><ManufacturerButton active={active} /></Link>
      </div>
      <div
        onClick={() => {
          clickaction(4);
        }}
      >
       <Link to={`/`} > <SettingsButton active={active} /></Link>
      </div>
    </nav>
  );
}

export default NavigationPanel;
