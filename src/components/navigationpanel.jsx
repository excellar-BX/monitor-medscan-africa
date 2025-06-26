import { Outlet,useLocation, Link } from "react-router-dom";
import {
  HomeButton,
  ProductButton,
  ManufacturerButton,
  SettingsButton,
  SupportButton,
} from "../components/sidebarButtons";
import { useState,useEffect } from "react";

function NavigationPanel() {
  const location = useLocation();

  const [active, setActive] = useState({
    active: true,
    id: 1,
  });

  useEffect(() => {
    switch (true) {
      case location.pathname === "/":
        setActive({ active: true, id: 1 });
        break;
      case location.pathname === "/Product":
        setActive({ active: true, id: 2 });
        break;
      case location.pathname.startsWith("/manufacturers"):
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
    <nav className="flex-col flex justify-between w-[264px] relative px-2 py-3 bg-white h-full border-r-[#ddd] border-r " id="sidebar">
      <h1 className="text-2xl font-semibold ml-5 mb-10 text-[#20427d] " >Medscan</h1>
      <div className="flex-1" >
        <span className="text-black text-opacity-50 text-sm px-5 " >MAIN MENU</span>
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
      </div>
      <div className=" w-full bottom-10 " >
        <span className="text-black text-opacity-50 text-sm px-5 " >OTHERS</span>
      <div onClick={() => clickAction(5)}>
        <Link to={`/`}>
          <SupportButton active={active} />
        </Link>
      </div>
        <div onClick={() => clickAction(4)}>
        <Link to={`/`}>
          <SettingsButton active={active} />
        </Link>
      </div>
      </div>
    </nav>
  );
}

export default NavigationPanel;
