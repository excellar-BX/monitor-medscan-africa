import boxedproduct from "../icons/boxedproduct.svg";
import manufacturerfiled from "../icons/manufacturerfiled.svg";
import gaintrend from "../icons/gaintrend.svg"


function WelcomeMessage() {
    return(
        <div className="flex-col w-[165px] h-[65px] gap-[5px] ">
        <p className="font-jarkatasans text-[] font-semibold text-[32px]  ">HI</p>
        <p className="font-jarkatasans text-[] font-light text-[16px]  ">Welcome to Medscan</p>
        </div>
    )
}


function ProductCard() {
    return(
        <div className="flex rounded-[20px] bg-white w-[457px] h-[304px] pt-[49px] pl-[38px] justify-between  ">
              <div className="flex-col w-[175px] h-[207px] gap-[45px] ">
                  <p className="font-jarkatasans medium text-[20px]" >Products</p>
                  <p className="font-jarkatasans text-blue text-[55px] font-semibold ">245</p>
                  <div className="flex items-center ">
                    <div className="w-[20px] h-[20px] ">
                        <img src={gaintrend} alt="gain trend" />
                    </div>
                    <p className="font-jarkatasans text-[16px] ">10% vs last month</p>
                  </div>
              </div>
              <div className="w-[115px] h-[100px] ">
                <img src={boxedproduct} alt="product icon" />
              </div>
        </div>
    )
}

function ManufacturerCard() {
    return(
        <div className="flex rounded-[20px] bg-white w-[457px] h-[304px] pt-[49px] pl-[38px] justify-between  ">
              <div className="flex-col w-[175px] h-[207px] gap-[45px] ">
                  <p className="font-jarkatasans medium text-[20px]" >Products</p>
                  <p className="font-jarkatasans text-blue text-[55px] font-semibold ">245</p>
                  <div className="flex items-center ">
                    <div className="w-[20px] h-[20px] ">
                        <img src={gaintrend} alt="gain trend" />
                    </div>
                    <p className="font-jarkatasans text-[16px] ">10% vs last month</p>
                  </div>
              </div>
              <div className="w-[115px] h-[100px] ">
                <img src={manufacturerfiled} alt="Manufacturer icon" />
              </div>
        </div>
    )
}



export {ProductCard,WelcomeMessage,ManufacturerCard}