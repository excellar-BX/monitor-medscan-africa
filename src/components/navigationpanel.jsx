import { Outlet,useLocation, Link } from "react-router-dom";
import {
  HomeButton,
  ProductButton,
  ManufacturerButton,
  SettingsButton,
} from "../components/sidebarButtons";
import { useState,useEffect } from "react";

function NavigationPanel() {
  const location = useLocation();

  const [active, setActive] = useState({
    active: true,
    id: 1,
  });

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActive({ active: true, id: 1 });
        break;
      case "/Product":
        setActive({ active: true, id: 2 });
        break;
      case "/manufacturers":
        setActive({ active: true, id: 3 });
        break;
      default:
        setActive({ active: true, id: 1 }); 
    }
  }, [location.pathname]); 

  const clickAction = (id) => {
    setActive({
      active: true,
      id: id,
    });
  };

  return (
    <nav className="flex-col w-[264px]" id="sidebar">
      <div onClick={() => clickAction(1)}>
        <Link to={`/`}>
          <HomeButton active={active} />
        </Link>
      </div>
      <div onClick={() => clickAction(2)}>
        <Link to={`/Product`}>
          <ProductButton active={active} />
        </Link>
      </div>
      <div onClick={() => clickAction(3)}>
        <Link to={`/manufacturers`}>
          <ManufacturerButton active={active} />
        </Link>
      </div>
      <div onClick={() => clickAction(4)}>
        <Link to={`/`}>
          <SettingsButton active={active} />
        </Link>
      </div>
    </nav>
  );
}

export default NavigationPanel;
