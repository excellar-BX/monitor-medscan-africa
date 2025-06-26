import Header from "../src/components/Header";
import ManufacturerTable from "../src/components/manufacturertable";

function ManufacturerOutlet() {
  return (
    <div className="flex-col overflow-x-hidden overflow-y-auto mx-5 ">
      <Header />
      <TextContent />
      <ManufacturerTable />
    </div>
  );
}

function TextContent() {
  return (
    <div className=" bg-[#d1e0fa] mt-[35px] flex justify-between pl-3 items-center ">
      <div>
        <p className="font-jakartasans font-bold text-[#20427d] text-[26px] ">
        Manufacturers
      <p className=" font-jakartasans font-light text-sm text-[#4573c3] w-[640px] ">
        At Med Scan, we partner with trusted manufacturers worldwide to bring
        you genuine, high-quality products..
      </p>
      </p>
      </div>
      <img className="w-[20%] " src="./banner_pic.png" alt="" />
    </div>
  );
}

export default ManufacturerOutlet;
