import Header from "../src/components/Header";
import ManufacturerSearchBar from "../src/components/searchIdbar";
import ManufacturerTable from "../src/components/manufacturertable";

function ManufacturerOutlet() {
  return (
    <div className="flex-col overflow-x-hidden overflow-y-auto ">
      <Header />
      <TextContent />
      <ManufacturerSearchBar />
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

export default ManufacturerOutlet;
