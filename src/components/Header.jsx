import SearchBar from "./searchbar";
import notificationicon from "../icons/notificationicon.svg";
import user from "../icons/user.svg"

function Header() {
    return (
        <header className="ml-[4px] px-[16px] h-[100px] flex items-center bg-white  ">
         <div className="flex flex-row gap-[212px]  pl-[30px] items-center  ">
           <SearchBar />
           <div className="flex items-center gap-[20px]">
            <div className="w-[30px] h-[30px] ">
                <img src={notificationicon} alt="notification icon" />
            </div>
            <div className="w-[40px] h-[40px] ">
                <img src={user} alt="user icon" />
            </div>
           </div>
         </div>
        </header>
    )
}

export default Header;