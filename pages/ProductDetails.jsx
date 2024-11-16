import React from "react";
import location from "../src/icons/locationicon.svg";
import eclipse from "../src/icons/eclipse.svg";
import dottedmarker from "../src/icons/dottedmarker.svg";
import { Link } from "react-router-dom";

const ProductDetails = () => {
    const productData = {
        "Product name": "",
        Date: "",
        UID: "",
        "Batch No": "",
    };

    return (
        <div className='bg-gray-100 pb-20'>
            <div className='flex mb-10 md:mb-16 p-0 md:p-5 bg-white w-full  items-center'>
               <Link to={`/product`}>
               <button className='text-gray-600 hover:text-gray-900'>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15 19l-7-7 7-7'
                        />
                    </svg>
                </button>
               </Link>

                <div className="flex-grow flex justify-center">
                    <h1 className='text-xl font-semibold p-1'>Product Details</h1>
                </div>
            </div>


            <div className='flex flex-col lg:flex-row justify-around bg-white mx-10 md:mx-20 p-6'>
                <div className='w-full mx-10 mb-10'>
                    <div className='space-y-6 rounded-lg mt-2 md:mt-10 mr-20 '>
                        {Object.entries(productData).map(([key, value], index) => (
                            <div
                                key={key}
                                className="flex border px-4 border-[#1E1E1E]"

                            >
                                <div className='w-1/3 py-6 border-r border-[#1E1E1E] text-sm font-medium text-gray-700'>
                                    {key}
                                </div>
                                <div className='w-2/3 py-6 px-4 text-sm text-gray-900'>
                                    {value}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>


                <div className='w-full lg:w-1/2'>
                    <h2 className='text-lg font-medium mb-4'>Location History</h2>
                    <div className='space-y-6'>
                        {[1, 2, 3, 4].map((item, index) => (
                            <div key={index} className='flex items-start'>
                                <div className='flex flex-col items-center'>
                                    {index === 0 ? (
                                        <img src={location} alt='Location Icon' />
                                    ) : (
                                        <img src={eclipse} className="ml-1" />
                                    )}
                                    {index !== 3 && (
                                        <div className='w-0.5 ml-[0.5] mt-[0.5] h-16 border-l-2 border-dotted border-[#3E59E8]'></div>
                                    )}

                                </div>
                                <div className='ml-4'>
                                    <div className='font-medium'>
                                        23, Karimu st, Victoria Island, Lagos, Nigeria
                                    </div>
                                    <div className='text-sm text-gray-500'>Mon, 10th, Nov, 2024</div>
                                    <div className='text-sm text-gray-500'>10:20 am</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;
