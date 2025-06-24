import React from 'react'
import { IoReturnUpBackOutline } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'

const PackageDetails = () => {
    const { batchId } = useParams()
    return (
        <div className='px-16 pt-10 border-t-[#ddd] border-t' >
            <Link to={`/manufacturers/1`} > <span className="back-btn flex items-center font-bold gap-x-3 "><IoReturnUpBackOutline className='text-2xl' /> back</span></Link>
            <div className='my-5' >
                <p className='text-4xl font-bold my-2 ' >{batchId}</p>
                <p className='my-1 text-xl' >Manufacturer Name: MedCare Labs Ltd</p>
                <p className='my-1 text-xl' >NAFDAC NO: NGq1234efr</p>
            </div>
            <table className='w-full mx-10 ' >
                <tr>
                    <th className='text-left' >Package No.</th>
                    <th className='text-left' >Batch No.</th>
                    <th className='text-left' >Manuf. Date </th>
                    <th className='text-left' >Expiry Date</th>
                    <th className='text-left' >Humidity</th>
                    <th className='text-left' >Status</th>
                </tr>
                <tr onClick={() => window.location.href = `/manufacturers/1/Amoxilin 50mg/B123`} className=' cursor-pointer ' >
                    <td>PKG-A176</td>
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className=''>60%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-green-600' >Okay</span></td>
                </tr>
                <tr className=' cursor-pointer ' >
                    <td>PKG-A176</td>
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className=''>60%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-green-600' >Okay</span></td>
                </tr>
                <tr className=' cursor-pointer ' >
                    <td>PKG-A176</td>
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className=''>60%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-green-600' >Okay</span></td>
                </tr>
                <tr className=' cursor-pointer ' >
                    <td>PKG-A176</td>
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className=''>60%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-green-600' >Okay</span></td>
                </tr>
                <tr className=' cursor-pointer ' >
                    <td>PKG-A176</td>
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className=''>60%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-green-600' >Okay</span></td>
                </tr>
                <tr className=' cursor-pointer ' >
                    <td>PKG-A176</td>
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className=''>60%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-green-600' >Okay</span></td>
                </tr>
                <tr className=' cursor-pointer ' >
                    <td>PKG-A176</td>
                    <td>B123</td>
                    <td className='' >Jan 10, 2025</td>
                    <td>Jan, 30 2035</td>
                    <td className=''>60%</td>
                    <td  ><span className='p-2 rounded-full text-white bg-green-600' >Okay</span></td>
                </tr>
                
            </table>
            <div className='my-10' >
                <h1 className='text-2xl font-Satoshi-bold' >Supply Chain History</h1>
            </div>
        </div>
    )
}

export default PackageDetails
