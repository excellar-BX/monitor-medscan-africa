import dropdown from '../icons/dropdown.svg';
import previousicon from '../icons/previousicon.png';
import nexticon from '../icons/nexticon.png';
import { Link } from 'react-router-dom';

function ProductTable() {
    return(
        <div class="flex-col ml-[109px] w-[750px]  bg-limewhite items-center mt-[20px] pb-[40px] ">
            <p className="ml-[20px] mt-[25px] font-jarkatasans font-bold text-[26px] ">Products</p>
            <div class="flex ml-[20px] justify-around items-center  w-[740px] mb-[25px] h-[60px] bg-white mt-[20px] ">
             <button className=" flex items-center rounded justify-around w-[86px] h-[30px] bg-blue text-limewhite ">
                <p>Year</p>
                <img src={dropdown} alt="dropdown" />
             </button>
             <button className="w-[106px] h-[30px] text-textblack font-medium ">
                Last month
             </button>
             <button className="w-[106px] h-[30px] text-textblack font-medium ">
                This month
             </button>
             <button className="w-[106px] h-[30px] text-textblack font-medium ">
                Last 7 days
             </button>
            </div>
      <table className="ml-[20px] mt-[30px] w-[740px] bg-white ">
        <tbody>
          <tr>
            <td className="px-[24px] py-[10px] pb-[22px] mt-[5px] font-jarkatasans text-[13px]   text-darkgray border-gray border-b-[1px] align-top border-b">
              Full product name
            </td>
            <Link to={`/product-details`}  >
            <td className="px-[24px] py-[10px] pb-[22px] text-blue  text-end mt-[5px] font-jarkatasans text-[13px]  border-gray border-b-[1px] align-top border-b">
              View Product details
            </td>
            </Link>
          </tr>
          <tr>
            <td className="px-[24px] py-[10px] pb-[22px] mt-[5px] font-jarkatasans text-[13px]   text-darkgray border-gray border-b-[1px] align-top border-b">
              Full product name
            </td>
            <Link to={`/product-details`}>
            <td className="px-[24px] py-[10px] pb-[22px] text-blue  text-end mt-[5px] font-jarkatasans text-[13px]  border-gray border-b-[1px] align-top border-b">
              View Product details
            </td>
            </Link>
          </tr>
          <tr>
            <td className="px-[24px] py-[10px] pb-[22px] mt-[5px] font-jarkatasans text-[13px]   text-darkgray border-gray border-b-[1px] align-top border-b">
              Full product name
            </td>
            <Link to={`/product-details`}>
            <td className="px-[24px] py-[10px] pb-[22px] text-blue  text-end mt-[5px] font-jarkatasans text-[13px]  border-gray border-b-[1px] align-top border-b">
              View Product details
            </td>
            </Link>
          </tr>
          <tr>
            <td className="px-[24px] py-[10px] pb-[22px] mt-[5px] font-jarkatasans text-[13px]   text-darkgray border-gray border-b-[1px] align-top border-b">
              Full product name
            </td>
            <Link to={`/product-details`}>
            <td className="px-[24px] py-[10px] pb-[22px] text-blue  text-end mt-[5px] font-jarkatasans text-[13px]  border-gray border-b-[1px] align-top border-b">
              View Product details
            </td>
            </Link>
          </tr>
          <tr>
            <td className="px-[24px] py-[10px] pb-[22px] mt-[5px] font-jarkatasans text-[13px]   text-darkgray border-gray border-b-[1px] align-top border-b">
              Full product name
            </td>
            <Link to={`/product-details`}>
            <td className="px-[24px] py-[10px] pb-[22px] text-blue  text-end mt-[5px] font-jarkatasans text-[13px]  border-gray border-b-[1px] align-top border-b">
              View Product details
            </td>
            </Link>
          </tr>
          <tr>
            <td className="px-[24px] py-[10px] pb-[22px] mt-[5px] font-jarkatasans text-[13px]   text-darkgray border-gray border-b-[1px] align-top border-b">
              Full product name
            </td>
            <Link to={`/product-details`}>
            <td className="px-[24px] py-[10px] pb-[22px] text-blue  text-end mt-[5px] font-jarkatasans text-[13px]  border-gray border-b-[1px] align-top border-b">
              View Product details
            </td>
            </Link>
          </tr>
          <tr>
            <td className="px-[24px] py-[10px] pb-[22px] mt-[5px] font-jarkatasans text-[13px]   text-darkgray border-gray border-b-[1px] align-top border-b">
              Full product name
            </td>
            <Link to={`/product-details`}>
            <td className="px-[24px] py-[10px] pb-[22px] text-blue  text-end mt-[5px] font-jarkatasans text-[13px]  border-gray border-b-[1px] align-top border-b">
              View Product details
            </td>
            </Link>
          </tr>
          <tr>
            <td className="px-[24px] py-[10px] pb-[22px] mt-[5px] font-jarkatasans text-[13px]   text-darkgray border-gray border-b-[1px] align-top border-b">
              Full product name
            </td>
            <Link to={`/product-details`}>
            <td className="px-[24px] py-[10px] pb-[22px] text-blue  text-end mt-[5px] font-jarkatasans text-[13px]  border-gray border-b-[1px] align-top border-b">
              View Product details
            </td>
            </Link>
          </tr>
          <tr>
            <td className="px-[24px] py-[10px] pb-[22px] mt-[5px] font-jarkatasans text-[13px]   text-darkgray border-gray border-b-[1px] align-top border-b">
              Full product name
            </td>
            <Link to={`/product-details`}>
            <td className="px-[24px] py-[10px] pb-[22px] text-blue  text-end mt-[5px] font-jarkatasans text-[13px]  border-gray border-b-[1px] align-top border-b">
              View Product details
            </td>
            </Link>
          </tr>
        </tbody>
      </table>
    </div>
    )
}

export default ProductTable;