import SearchBar from "./searchbar";
import notificationicon from "../icons/notificationicon.svg";
import user from "../icons/user.svg"
import NotificationBell from "./NotificationBell";
import searchicon from "../icons/searchicon.svg";
import { useRef } from "react";

function Header() {
    
    const inputRef = useRef(null);
    const handleSearchClick = () => {
    // Focus the input field when the "Search" text is clicked
    inputRef.current.focus();

  };
    return (
        <header className="  pl-5 h-[70px] flex justify-between items-center bg-white  ">
         <div className="flex flex-row  pl-[30px] justify-between items-center w-full  ">
            <div className="flex bg-[#ededed] px-[24px] items-center justify-between w-full max-w-[600px] h-10 rounded-md" >
            <p onClick={handleSearchClick} className="cursor-pointer font-jarkatasans text-gray font-light text-[14px] pr-3 ">Search</p>
            <input ref={inputRef} className="w-full outline-none bg-transparent " type="text" name="search" id="search" />
            <div className="w-[24px] h-[24px] ">
                <img className="w-[18px] h-[18px] ml-3 " src={searchicon} alt="search icon" />
            </div>
            </div>
           <div className="flex items-center w-[20%] gap-5 ">
            {/* <div className="w-[30px] h-[30px] ">
                <img src={notificationicon} alt="notification icon" />
            </div> */}
            <NotificationBell/>
            <div className="w-[40px] h-[40px] ">
                <img src={user} alt="user icon" />
            </div>
           </div>
         </div>
        </header>
    )
}

export default Header;