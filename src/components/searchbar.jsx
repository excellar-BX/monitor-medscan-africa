import searchicon from "../icons/searchicon.svg";
import { useRef } from "react";

function SearchBar() {
    const inputRef = useRef(null);

  const handleSearchClick = () => {
    // Focus the input field when the "Search" text is clicked
    inputRef.current.focus();
  };

    return(
        <div className="flex bg-[#5e3f3f] px-[24px] items-center justify-between w-[60%] max-w-[500px] h-[38px] rounded-[12px]" >
            <p onClick={handleSearchClick} className="cursor-pointer font-jarkatasans text-gray font-light text-[14px] pr-3 ">Search</p>
            <input ref={inputRef} className="w-full outline-none bg-transparent " type="text" name="search" id="search" />
            <div className="w-[24px] h-[24px] ">
                <img className="w-[18px] h-[18px] ml-3 " src={searchicon} alt="search icon" />
            </div>
        </div>
    )
}

export default SearchBar;