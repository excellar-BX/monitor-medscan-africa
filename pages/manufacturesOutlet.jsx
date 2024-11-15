import Header from "../src/components/Header";
import ManufacturerSearchBar from "../src/components/searchIdbar";
import ManufacturerTable from "../src/components/manufacturertable";

function ManufacturerOutlet() {
  return (
    <div className="flex-col overflow-x-hidden overflow-y-auto ">
      <Header />
      <TextContent />
      <ManufacturerSearchBar />
      <TableHeader />
      <ManufacturerTable />  
    </div>
  );
}

function TextContent() {
  return (
    <div className="ml-[50px] mt-[35px] flex-col ">
      <p className="font-jakartasans font-bold text-textblack text-[26px] ">
        Manufacturers
      </p>
      <p className="mt-[15px] font-jakartasans font-light text-[16px] w-[640px] ">
        "At Med Scan, we partner with trusted manufacturers worldwide to bring
        you genuine, high-quality products.."
      </p>
    </div>
  );
}

function TableHeader() {

    return(
        <div class="flex-col ml-[50px] w-[795px] bg-white items-center  mt-[20px] ">
      <table className="ml-[20px] w-[795px] bg-white ">
        <thead>
          <tr>
            <th className="pl-[40px] py-[10px] text-center  text-gray-600 font-jarkatasans text-[13px] font-bold ">
              S/N
            </th>
            <th className="pl-[67px] py-[10px] text-start  text-gray-600 font-jarkatasans text-[13px] font-bold ">
              Name
            </th>
            <th className="pl-[218px] py-[10px] text-center  text-gray-600 font-jarkatasans text-[13px] font-bold ">
              Product categories
            </th>
            <th className="px-[40px] py-[10px] text-center  text-gray-600 font-jarkatasans text-[13px] font-bold ">
              ID
            </th>
            <th className="px-[40px] py-[10px] text-center  text-gray-600 font-jarkatasans text-[13px] font-bold ">
              Location
            </th>
          </tr>
        </thead>
      </table>
    </div>
    );
}

export default ManufacturerOutlet;
