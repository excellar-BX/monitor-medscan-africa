import searchicon from "../icons/searchicon.svg";


function ManufacturerSearchBar() {
    return(
        <div className="ml-[50px] mt-[30px] flex bg-white px-[24px] items-center justify-between w-[743px] h-[44px] rounded-[9px]" >
            <input placeholder="Manufacturer's name or ID" className="w-[500px] outline-none bg-white font-montserrat pl-[10px] " type="text" name="search" id="search" />
            <div className="w-[24px] h-[24px] ">
                <img className="w-[18px] h-[18px] " src={searchicon} alt="search icon" />
            </div>
        </div>
    )
}

export default ManufacturerSearchBar;