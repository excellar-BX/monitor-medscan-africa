import searchicon from "../icons/searchicon.svg";
import { useRef } from "react";

function SearchBar() {
    const inputRef = useRef(null);

  const handleSearchClick = () => {
    // Focus the input field when the "Search" text is clicked
    inputRef.current.focus();
  };

    return(
        <div className="flex bg-lightgray px-[24px] items-center justify-between w-[643px] h-[52px] rounded-[16px]" >
            <p onClick={handleSearchClick} className="cursor-pointer font-jarkatasans text-gray font-medium text-[16px] ">Search</p>
            <input ref={inputRef} className="w-[500px] outline-none bg-lightgray " type="text" name="search" id="search" />
            <div className="w-[24px] h-[24px] ">
                <img className="w-[18px] h-[18px] " src={searchicon} alt="search icon" />
            </div>
        </div>
    )
}

export default SearchBar;