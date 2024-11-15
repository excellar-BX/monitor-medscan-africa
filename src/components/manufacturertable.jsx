import { useEffect, useState } from "react";
import eclipse from "../icons/eclipse.svg";

function ManufacturerTable() {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const response = await fetch("https://medscan-backend-4lgk.onrender.com/api/manufacturers");
        const data = await response.json();
        setManufacturers(data.manufacturers);
      } catch (error) {
        console.error("Error fetching manufacturers:", error);
      }
    };
    fetchManufacturers();
  }, []);

  return (
    <div className="flex-col ml-[50px] w-[785px] bg-white items-center mt-[0px] pb-[20px]">
      <table className="ml-[27px] w-[750px] bg-white">
        <tbody>
          {manufacturers.map((manufacturer) => (
            <tr key={manufacturer._id}>
              <td className="px-[10px] text-end py-[13px] pb-[18px] mt-[5px] font-jarkatasans text-[13px] text-darkgray border-gray border-b-[1px] align-top">
                <img className="ml-[15px]" src={eclipse} alt="active manufacturers" />
              </td>
              <td className="px-[10px] text-start py-[13px] pb-[18px] mt-[5px] font-jarkatasans text-[13px] text-darkgray border-gray border-b-[1px] align-top">
                {manufacturer.fullName || "Manufacturer's Name"}
              </td>
              <td className="px-[10px] text-start py-[13px] pb-[18px] mt-[5px] font-jarkatasans text-[13px] text-darkgray border-gray border-b-[1px] align-top">
                {manufacturer.businessName || "Pharmaceuticals"}
              </td>
              <td className="px-[10px] text-start py-[13px] pb-[18px] mt-[5px] font-jarkatasans text-[13px] text-darkgray border-gray border-b-[1px] align-top">
                {manufacturer.businessRegNumber || "N/A"}
              </td>
              <td className="px-[10px] text-start py-[13px] pb-[18px] mt-[5px] font-jarkatasans text-[13px] text-darkgray border-gray border-b-[1px] align-top">
                {manufacturer.businessLocation || "Location"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManufacturerTable;
