import { useEffect, useState } from "react";
import eclipse from "../icons/eclipse.svg";

function ManufacturerTable() {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const response = await fetch("https://medscan-backend-4lgk.onrender.com/api/manufacturer/all");
        const data = await response.json();
        setManufacturers(data.manufacturers);
      } catch (error) {
        console.error("Error fetching manufacturers:", error);
      }
    };
    fetchManufacturers();
  }, []);

  return (
    <div className="flex-col mt-[20px] ml-[50px] w-[90%] overflow-x-auto bg-white items-center  pb-[20px]">
      <table className="  w-full bg-white">
          <tr className="  " >
            <th className="w-[10%] border-r border-b border-[grey] py-[10px] text-center  text-gray-600 font-jarkatasans text-[13px] font-bold ">
              S/N
            </th>
            <th className="w-[30%] border-r border-b border-[grey] py-[10px] text-center  text-gray-600 font-jarkatasans text-[13px] font-bold ">
              Name
            </th>
            <th className="w-[20%] border-r border-b border-[grey] py-[10px] text-center  text-gray-600 font-jarkatasans text-[13px] font-bold ">
              Product categories
            </th>
            <th className="w-[10%] border-r border-b border-[grey] py-[10px] text-center  text-gray-600 font-jarkatasans text-[13px] font-bold ">
              ID
            </th>
            <th className="w-[30%]  border-b mx-auto py-[10px] text-center  text-gray-600 font-jarkatasans text-[13px] font-bold ">
              Location
            </th>
          </tr>
          {manufacturers.map((manufacturer) => (
             
           <tr key={manufacturer._id}>
          <td className="border-r py-3 border-b w-[10px] mx-auto border-[grey]  ">
               <img className="ml-[10px] w-[10px] h-[15px] " src={eclipse} alt="active manufacturers" />
            </td>
            <td className="text-center py-3 border-b border-r border-[grey] " >{manufacturer.fullName || "Manufacturer's Name"}</td>
            <td className="text-center py-3 border-b border-r border-[grey]" >{manufacturer.businessName || "Pharmaceuticals"}</td>
            <td className="text-center py-3 border-b border-r border-[grey]" >{manufacturer.businessRegNumber || "N/A"}</td>
            <td className="text-center py-3 border-b " >{manufacturer.businessLocation || "Location"}</td>
            
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
