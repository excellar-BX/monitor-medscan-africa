import { useEffect, useState } from "react";
import axios from "axios"
import eclipse from "../icons/eclipse.svg";
import { BiSearch, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsFunnel } from "react-icons/bs";

function ManufacturerTable() {
  const [manufacturers, setManufacturers] = useState(
    [
         { _id:1, fullName: 'MedCare Labs Ltd', businessName: 'Global Pharmaceutical Inc', ProductsNo:30, registrationId:"NNT/MMUT-1/33", COF:"Nigeria", status:"active", DA:"02-31-2001",  },
    { _id:2, fullName: 'BioHealth Corp. Pty Ltd.', businessName: 'Wellness Pharma Group', ProductsNo:21, registrationId:"NNT/MMUT-1/33", COF:"Kenya", status:"active", DA:"02-24-2021", }
  ])

useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const response = await axios.get("https://medscan-backend-4lgk.onrender.com/api/manufacturer/all");
        const data = response.data;
        setManufacturers(data.manufacturers);
        console.log(data.manufacturers[10].registrationId)
      } catch (error) {
        console.error("Error fetching manufacturers:", error);
      }
    };
    fetchManufacturers();
  }, []);
  const [filter, setFilter] = useState("")
  const filteredManufacturers = filter? manufacturers.filter((data) => data.fullName?.toLowerCase().includes(filter.toLowerCase()) || data.registrationId?.toLowerCase().includes(filter.toLowerCase())  ) : manufacturers;
  const handleFilter = (e)=> {
    setFilter(e.target.value)
  }

  return (
    <div className="flex-col mt-[20px] overflow-x-auto    pb-20 ">

             <div className="flex items-center justify-between mt-5  " >
                    <div className=" flex bg-white px-[24px] items-center justify-between w-full h-12 border-[#ddd] border rounded-[9px]" >
                        <input onChange={handleFilter} value={filter} placeholder="Manufacturer's name or ID" className="w-[80%] outline-none bg-white font-montserrat pl-[10px] " type="text" name="search" id="search" />
                          <BiSearch />
                    </div>
                    <div className="bg-[#ffffff] ml-5 p-3 h-12 rounded-md border  border-[#ddd] " >
                        <BsFunnel />
                    </div>
                    </div>
      <table className="  w-full mt-5 bg-white">
        <tr className=" text-left " >
          <th className="w-[5%]  text-gray-600 text-sm font-Satoshi-bold ">
            S/N
          </th>
          <th className="w-[10%]  text-gray-600 text-sm font-Satoshi-bold ">
            Manufacturer Name
          </th>
          <th className="w-[10%]  text-gray-600 text-sm font-Satoshi-bold ">
            Company Name
          </th>
          <th className="w-[10%]  text-gray-600 text-sm font-Satoshi-bold ">
            No. of Products
          </th>
          <th className="w-[10%]  text-gray-600 text-sm font-bold ">
            License/Registration ID
          </th>
          <th className="w-[10%]  text-gray-600 text-sm font-bold ">
            Country of Origin
          </th>
          <th className="w-[10%]  text-gray-600 text-sm font-bold ">
            Status
          </th>
          <th className="w-[10%]  text-gray-600 text-sm font-bold ">
            Date Added
          </th>
        </tr>
        {filteredManufacturers.map((manufacturer, index) => (
          
          <tr onClick={()=> window.location.href = `/manufacturers/${manufacturer._id}` } className="hover:cursor-pointer" key={manufacturer._id}>
            <td className=" font-semibold py-3 border-b text-sm w-[10px]  ">{index + 1}</td>
            <td className=" font-semibold py-3 border-b text-sm " >{manufacturer.fullName} </td>
            <td className=" font-semibold py-3 border-b text-sm " >{manufacturer.businessName}</td>
            <td className=" font-semibold py-3 border-b text-sm text-center " >{manufacturer.ProductsNo}</td>
            <td className=" font-semibold py-3 border-b text-sm " >{manufacturer.registrationId}</td>
            <td className=" font-semibold py-3 border-b text-sm " >{manufacturer.countryOfOrigin}</td>
            <td className=" font-semibold py-3 border-b text-sm " >{String(manufacturer.isEmailVerified) === "false"? "Inactive" : "Active"}</td>
            <td className=" font-semibold py-3 border-b text-sm " >{(manufacturer.createdAt || "2025-04-21").slice(0, 10)}</td>

          </tr>
        ))}
        {/* <tr key={manufacturer._id}>
            <td className="pl-[35px] text-end py-[13px] pb-[18px] mt-[5px] font-jarkatasans text-[13px] text-darkgray border-gray border-b-[1px] align-top">
               <img className="ml-[10px] w-[10px] h-[15px] " src={eclipse} alt="active manufacturers" />
            </td>
              <td className=" pl-[20px] text-start py-[13px] pb-[18px] mt-[5px] font-jarkatasans text-[13px] text-darkgray border-gray border-b-[1px] align-top">
                
              </td>
              <td className="pl-[0px] text-start py-[13px] pb-[18px] mt-[5px] font-jarkatasans text-[13px] text-darkgray border-gray border-b-[1px] align-top">
                
              </td>
              <td className="pl-[0px] text-start py-[13px] pb-[18px] mt-[5px] font-jarkatasans text-[13px] text-darkgray border-gray border-b-[1px] align-top">
                
              </td>
              <td className="pl-[0px] text-start py-[13px] pb-[18px] mt-[5px] font-jarkatasans text-[13px] text-darkgray border-gray border-b-[1px] align-top">
                
              </td>
            </tr> */}
      </table>
    </div>
  );
}

export default ManufacturerTable;



