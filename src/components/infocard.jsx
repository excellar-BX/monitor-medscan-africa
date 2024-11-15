import boxedproduct from "../icons/boxedproduct.svg";
import manufacturerfiled from "../icons/manufacturerfiled.svg";
import gaintrend from "../icons/gaintrend.svg"
import losstrend from "../icons/losstrend.svg"
import { useEffect,useState } from "react";



function WelcomeMessage() {
    return(
        <div className="flex-col w-[165px] ml-[109px]  mt-[26px] mb-[18px] h-[65px] gap-[9px] ">
        <p className="font-jarkatasans font-textblack font-semibold text-[20px]  ">Hi, User</p>
        <p className="font-jarkatasans text-textblack font-light text-[15px]  ">Welcome to Medscan</p>
        </div>
    )
}


function ProductCard() {
    const [product, setProduct] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://medscan-backend-4lgk.onrender.com/api/products/all-products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProduct(data.totalProducts); 
            } catch (err) {
                setError(err.message); 
            }
        };

        fetchData(); 
    }, []); 


    if (error) {
        return <div>Error: {error}</div>;
    }

    return(
        <div className="flex rounded-[20px] bg-white w-[350px] h-[220px] pt-[38px] pl-[38px] pr-[38px] justify-between  ">
              <div className="flex-col w-[175px] h-[207px] ">
                  <p className="font-jarkatasans medium text-[18px]" >Products</p>
                  <p className="font-jarkatasans mt-[18px] text-blue text-[37px] font-bold ">{product}</p>
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
    const [Manufacturer , setManufacturer ] = useState(0)
    const [error, setError] = useState(null);

    useEffect(() => {
  
        const fetchData = async () => {
            try {
                const response = await fetch('https://medscan-backend-4lgk.onrender.com/api/manufacturers');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setManufacturer(result.manufacturerCount); 
            } catch (err) {
                setError(err.message); 
            }
        };

        fetchData(); 
    }, []);
    return(
        <div className="flex rounded-[20px] bg-white w-[350px] h-[220px] pt-[38px] pl-[38px] pr-[38px] justify-between  ">
              <div className="flex-col w-[175px] h-[207px] ">
                  <p className="font-jarkatasans medium text-[18px]" >Manufactuers</p>
                  <p className="font-jarkatasans mt-[18px] text-blue text-[37px] font-bold ">{Manufacturer}</p>
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