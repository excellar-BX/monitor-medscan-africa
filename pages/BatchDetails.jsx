import React from 'react'
import { BiBadgeCheck, BiDownload } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';
import { HiBadgeCheck } from 'react-icons/hi';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom'

const BatchDetails = () => {
    const { productName } = useParams();
    return (
        <div className='px-16 pt-10 border-t-[#ddd] border-t' >
            <div className=" flex justify-between ">
                <Link to={`/manufacturers/1`} > <span className="back-btn flex items-center font-bold gap-x-3 "><IoReturnUpBackOutline className='text-2xl' /> back</span></Link>
                <span className='flex text-xl items-center' ><span className='font-bold mr-5' >Verification Badge:</span> Verified <HiBadgeCheck className='text-[#2732ff] mx-1 ' /> </span>
            </div>
            <div className='my-5' >
                <p className='text-4xl font-bold my-2 ' >{productName}</p>
                <p className='my-1 text-xl' >Manufacturer Name: MedCare Labs Ltd</p>
                <p className='my-1 text-xl' >NAFDAC NO: NGq1234efr</p>
            </div>
            <div className='details flex gap-3 ' >
                <div className='left-side w-[70%] shadow-md rounded-xl p-5  ' >
            <span className='text-2xl font-bold ' >Batch Summary</span>
            <table className='w-full' >
                <tr>
                    <th className='text-left' >Batch No.</th>
                    <th className='text-left' >Manuf. Date </th>
                    <th className='text-left' >Expiry Date</th>
                    <th className='text-left' >Humidity</th>
                    <th className='text-left' >Status</th>
                </tr>
                <tr onClick={()=> window.location.href = `/manufacturers/1/Amoxilin 50mg/B123` } className=' cursor-pointer ' >
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className='text-center'>10%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-green-600' >Okay</span></td>
                </tr>
                <tr className=' cursor-pointer ' >
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className='text-center'>10%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-green-600' >Okay</span></td>
                </tr>
                <tr className=' cursor-pointer ' >
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className='text-center'>10%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-green-600' >Okay</span></td>
                </tr>
                <tr className=' cursor-pointer ' >
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className='text-center'>10%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-green-600' >Okay</span></td>
                </tr>
                <tr className=' cursor-pointer ' >
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className='text-center'>10%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-red-600' >Alert</span></td>
                </tr>
                <tr className=' cursor-pointer ' >
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className='text-center'>10%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-green-600' >Okay</span></td>
                </tr>
                <tr className=' cursor-pointer ' >
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className='text-center'>10%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-green-600' >Okay</span></td>
                </tr>
                
            </table>
                </div>
                <div className='right-side w-[34%] gap-10 flex flex-col' >
                        <div className='shadow-md rounded-xl p-5 h-52 bg-gradient-to-tr from-blue to-red-400 ' >
                            *Chart to be here
                              </div>
                              <div className='shadow-md rounded-xl p-5 ' >
                            <span className='text-2xl font-bold ' >Compliance Document</span>
                             <ul>
                            <li className='flex items-center justify-between my-3' ><span>Certificate of Analysis (COA) </span> <BsChevronRight/> </li>
                            <li className='flex items-center justify-between my-3' ><span>NAFDAC Registration Certificate</span> <BsChevronRight/></li>
                            <li className='flex items-center justify-between my-3' ><span>Counterfeit Detection</span>  <BsChevronRight/></li>
                        </ul>
                            </div>
                        <div className='shadow-md rounded-xl p-5 ' >
                            <span className='text-2xl font-bold ' >Alert and Issues</span>
                        <ul>
                            <li className='flex items-center justify-between my-3' ><span>Active Alerts <span className='py-1 px-2.5 text-center bg-red-600 rounded-full' >3</span> </span> <BsChevronRight/> </li>
                            <li className='flex items-center justify-between my-3' ><span>Unusual Scan Location </span> <BsChevronRight/></li>
                            <li className='flex items-center justify-between my-3' ><span>Counterfeit Detection</span>  <BsChevronRight/></li>
                        </ul>
                        </div>
                        
                        </div>
                <div className='right-side w-[50%' ></div>
            </div>
        </div>
    )
}

export default BatchDetails
