import boxedproduct from "../icons/boxedproduct.svg";
import manufacturerfiled from "../icons/manufacturerfiled.svg";
import gaintrend from "../icons/gaintrend.svg"
import losstrend from "../icons/losstrend.svg"


function WelcomeMessage() {
    return(
        <div className="flex-col w-[165px] ml-[109px]  mt-[26px] mb-[18px] h-[65px] gap-[9px] ">
        <p className="font-jarkatasans font-textblack font-semibold text-[20px]  ">Hi, User</p>
        <p className="font-jarkatasans text-textblack font-light text-[15px]  ">Welcome to Medscan</p>
        </div>
    )
}


function ProductCard() {
    return(
        <div className="flex rounded-[20px] bg-white w-[350px] h-[220px] pt-[38px] pl-[38px] pr-[38px] justify-between  ">
              <div className="flex-col w-[175px] h-[207px] ">
                  <p className="font-jarkatasans medium text-[18px]" >Products</p>
                  <p className="font-jarkatasans mt-[18px] text-blue text-[37px] font-bold ">245</p>
                  <div className="flex items-center gap-[5px] mt-[24px] ">
                    <div className="w-[20px] h-[20px] ">
                        <img src={gaintrend} alt="gain trend" />
                    </div>
                    <p className="font-jarkatasans text-[13px] "><span className="text-blue">10%</span> vs last month</p>
                  </div>
              </div>
              <div className="w-[75px] h-[75px] ">
                <img src={boxedproduct} alt="product icon" />
              </div>
        </div>
    )
}

function ManufacturerCard() {
    return(
        <div className="flex rounded-[20px] bg-white w-[350px] h-[220px] pt-[38px] pl-[38px] pr-[38px] justify-between  ">
              <div className="flex-col w-[175px] h-[207px] ">
                  <p className="font-jarkatasans medium text-[18px]" >Products</p>
                  <p className="font-jarkatasans mt-[18px] text-blue text-[37px] font-bold ">58</p>
                  <div className="flex items-center gap-[5px] mt-[24px] ">
                    <div className="w-[20px] h-[20px] ">
                        <img src={losstrend} alt="loss trend" />
                    </div>
                    <p className="font-jarkatasans text-[13px] "><span className="text-blue">10%</span> vs last month</p>
                  </div>
              </div>
              <div className="w-[75px] h-[75px] ">
                <img src={manufacturerfiled} alt="product icon" />
              </div>
        </div>
    )
}



export {ProductCard,WelcomeMessage,ManufacturerCard}