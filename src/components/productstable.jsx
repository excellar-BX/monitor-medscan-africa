import { useState, useEffect } from 'react';
import dropdown from '../icons/dropdown.svg';
import previousicon from '../icons/previousicon.png';
import nexticon from '../icons/nexticon.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ProductTable() {
  const [productNames, setProductNames] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const navigate = useNavigate()
  // Fetch product names
  useEffect(() => {
    async function fetchProductNames() {
      try {
        const response = await fetch('https://medscan-backend-4lgk.onrender.com/api/products/products/names');
        const data = await response.json();
        console.log(data);
        setProductNames(data);
      } catch (error) {
        console.error('Error fetching product names:', error);
      }
    }
    fetchProductNames();
  }, []);

  // Fetch product details when selected productId changes
  useEffect(() => {
    if (selectedProductId) {
      async function fetchProductDetails() {
        try {
          const response = await fetch(`'https://medscan-backend-4lgk.onrender.com/api/products/product/${selectedProductId}`);
          const data = await response.json();
          setProductDetails(data);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      }
      fetchProductDetails();
    }
  }, [selectedProductId]);

  // Handle product selection and overlay visibility
  const handleProductClick = (productName) => {
    navigate(`/product/${encodeURIComponent(productName)}`);
  };

  // Close overlay
  // const closeOverlay = () => {
  //   setOverlayVisible(false);
  //   setProductDetails(null);
  // };

  return (
    <div className="flex-col ml-[109px] w-[750px] bg-limewhite items-center mt-[20px] pb-[40px]">
      <p className="ml-[20px] mt-[25px] font-jarkatasans font-bold text-[26px]">Products</p>
      <div className="flex ml-[20px] justify-around items-center w-[740px] mb-[25px] h-[60px] bg-white mt-[20px]">
        <button className="flex items-center rounded justify-around w-[86px] h-[30px] bg-blue text-limewhite">
          <p>Year</p>
          <img src={dropdown} alt="dropdown" />
        </button>
        <button className="w-[106px] h-[30px] text-textblack font-medium">Last month</button>
        <button className="w-[106px] h-[30px] text-textblack font-medium">This month</button>
        <button className="w-[106px] h-[30px] text-textblack font-medium">Last 7 days</button>
      </div>
      <table className="ml-[20px] mt-[30px] w-[740px] bg-white">
        <tbody>
          {productNames.map((productName, index) => (
            <tr key={index}>
              <td className="px-[24px] py-[10px] pb-[22px] mt-[5px] font-jarkatasans text-[13px] text-darkgray border-gray border-b-[1px] align-top border-b">
                {productName}
              </td>
              <td className="px-[24px] py-[10px] pb-[22px] text-blue text-end mt-[5px] font-jarkatasans text-[13px] border-gray border-b-[1px] align-top border-b">
                <button
                  onClick={() => handleProductClick(productName)}
                >
                  View Product details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Overlay for product details */}
      {overlayVisible && productDetails && (
        <div className="overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 w-[500px] rounded-lg">
            <button onClick={closeOverlay} className="text-red-500 text-xl float-right">X</button>
            <h2 className="font-jarkatasans font-bold text-[24px]">{productDetails.productInformation.productName}</h2>
            <p className="mt-4">{productDetails.productInformation.description}</p>
            <p className="mt-2"><strong>Price:</strong> {productDetails.productInformation.price}</p>
            {/* Display other details here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductTable;
