import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { BiCaretRight, BiDownload, BiHealth, BiShare, BiShareAlt, BiShieldPlus } from 'react-icons/bi';
import { FaBackward, FaCaretRight } from 'react-icons/fa';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom'
import { FaBandage } from 'react-icons/fa6';
import { BsChevronRight } from 'react-icons/bs';

const ManufacturerDetails = () => {
    const [manufacturers, setManufacturers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchManufacturers = async () => {
            try {
                setLoading(true);
                const response = await axios.get("https://medscan-backend-4lgk.onrender.com/api/manufacturer/all");
                const data = response.data;
                setManufacturers(data.manufacturers);
                console.log("Manufacturers list:", data.manufacturers);
            } catch (error) {
                console.error("Error fetching manufacturers:", error);
                setError("Failed to load manufacturer data");
            } finally {
                setLoading(false);
            }
        };
        fetchManufacturers();
    }, []);

    const { id } = useParams();
    console.log("Route ID:", id);
    console.log("Manufacturer IDs:", manufacturers.map(m => m._id));

    // Better way to find manufacturer - use the ID from URL params or fallback to index 9
    const manufacturer = manufacturers.find(data => String(data._id) === String(id));
    console.log("Matched manufacturer:", manufacturer);

    // Show loading state
    if (loading) {
        return (
            <div className='px-16 pt-10 border-t-[#ddd] border-t'>
                <div className="flex justify-center items-center h-64">
                    <div className="text-xl">Loading manufacturer details...</div>
                </div>
            </div>
        );
    }

    // Show error state
    if (error) {
        return (
            <div className='px-16 pt-10 border-t-[#ddd] border-t'>
                <div className="flex justify-center items-center h-64">
                    <div className="text-xl text-red-600">{error}</div>
                </div>
            </div>
        );
    }

    // Show not found state
    if (!manufacturer) {
        return (
            <div className='px-16 pt-10 border-t-[#ddd] border-t'>
                <div className="header flex justify-between">
                    <Link to={'/manufacturers'}> 
                        <span className="back-btn flex items-center font-bold gap-x-3">
                            <IoReturnUpBackOutline className='text-2xl' /> back
                        </span>
                    </Link>
                </div>
                <div className="flex justify-center items-center h-64">
                    <div className="text-xl">Manufacturer with Id <span className="text-red-500" >{id}</span> not found</div>
                </div>
            </div>
        );
    }
    

    return (
        <>
        <div className='px-16 pt-10 border-t-[#ddd] border-t'>
            <div className="header flex justify-between">
                <Link to={'/manufacturers'}> 
                    <span className="back-btn flex items-center font-bold gap-x-3">
                        <IoReturnUpBackOutline className='text-2xl' /> back
                    </span>
                </Link>
                <div className='flex items-center gap-3 border-[#435ab5] border-2 p-4 rounded-xl text-[#435ab5]'>
                    Download Manufacturer Report <BiDownload className='text-2xl' /> 
                </div>
            </div>
            <div className='flex flex-row items-center gap-5'>
                <div className='w-fit rounded-xl border-2 p-5'>
                    <BiShieldPlus className='text-5xl text-[#435ab5]' />
                </div>
                <span className='flex-col flex gap-y-5'>
                    <p className='font-bold text-4xl'>{manufacturer.fullName}</p>
                    <p className='text2xl'>Company Name: {manufacturer.businessName || 'N/A'}</p>
                </span>
            </div>
            <div className="details flex flex-wrap gap-8 my-5 shadow-md p-5 rounded-xl">
                <span><span className='font-bold'>Registration Number: </span>{manufacturer.registrationId || 'G123454DEF'}</span>
                <span><span className='font-bold'>Address: </span>{manufacturer.businessLocation || 'No.23 Bode Str. Ikeja Lagos, Nigeria.'}</span>
                <span><span className='font-bold'>Email: </span>{manufacturer.email}</span>
                <span><span className='font-bold'>Tel: </span>{manufacturer.phone}</span>
                <span><span className='font-bold'>Website: </span><Link to={"https://www.medcarelab.com"}>www.medcarelab.com</Link></span>
                <span><span className='font-bold'>Registered on Platform: </span>{new Date(manufacturer.createdAt).toLocaleDateString()}</span>
                <span><span className='font-bold'>Certifications: </span>{manufacturer.certifications?.join(', ') || 'ISO, WHO, GMP'}</span>
                <span><span className='font-bold'>License Type: </span>{manufacturer.licenseType || '#######'}</span>
                <span><span className='font-bold'>License Expiry Date: </span>October 15 2040</span>
            </div>
            <div className='flex flex-row gap-3'>
                <div className='w-[60%] shadow-md rounded-xl p-5'>
                    <span className='text-2xl font-bold'>Product Summary</span>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className='text-left'>Product Name</th>
                                <th className='text-left'>Batch Count</th>
                                <th className='text-left'>Manufacturing Date</th>
                                <th className='text-left'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr onClick={() => window.location.href = `/manufacturers/${manufacturer._id}/Amoxilin 50mg`} className='text-slate-700 cursor-pointer'>
                                <td>Amoxilin 50mg</td>
                                <td className='text-center'>10</td>
                                <td>Jan, 30 2025</td>
                                <td className='text-right'>Live</td>
                            </tr>
                            <tr className='text-slate-700'>
                                <td>Pain Killer</td>
                                <td className='text-center'>10</td>
                                <td>Jan, 30 2025</td>  
                                <td className='text-right'>Live</td>
                            </tr>
                            <tr className='text-slate-700'>
                                <td>Antibiotic</td>
                                <td className='text-center'>10</td>
                                <td>Jul, 20 2025</td>
                                <td className='text-right'>Live</td>
                            </tr>
                            <tr className='text-slate-700'>
                                <td>Antidepressant</td>
                                <td className='text-center'>5</td>
                                <td>Mar, 06 2025</td>
                                <td className='text-right'>Expired</td>
                            </tr>
                            {/* Additional rows... */}
                        </tbody>
                    </table>
                </div>
                <div className='w-[50%] gap-10 flex flex-col'>
                    <div className='shadow-md rounded-xl p-5'>
                        <span className='text-2xl font-bold'>Compliance and Verification</span>
                        <div className='my-3 flex justify-between items-center'>
                            <span>NAFDAC Status: </span>
                            <span className='bg-green-500 px-5 py-1 rounded-full'>Verified</span>
                        </div>
                        <div className='my-3 flex justify-between items-center'>
                            <span>NDLEA Status: </span>
                            <span className='bg-green-500 px-5 py-1 rounded-full'>Verified</span>
                        </div>
                    </div>
                    <div className='shadow-md rounded-xl p-5'>
                        <span className='text-2xl font-bold'>Alert and Issues</span>
                        <ul>
                            <li className='flex items-center justify-between my-3'>
                                <span>Active Alerts <span className='py-1 px-2.5 text-center bg-red-600 rounded-full'>3</span> </span> 
                                <BsChevronRight/> 
                            </li>
                            <li className='flex items-center justify-between my-3'>
                                <span>Unusual Scan Location </span> 
                                <BsChevronRight/>
                            </li>
                            <li className='flex items-center justify-between my-3'>
                                <span>Counterfeit Detection</span>  
                                <BsChevronRight/>
                            </li>
                        </ul>
                    </div>
                    <div className='shadow-md rounded-xl p-5'>
                        <span className='text-2xl font-bold'>Operational Information</span>
                        <ul>
                            <li className='flex items-center justify-between my-3'>
                                <span>Region(s) of Operation </span> 
                                <BsChevronRight/> 
                            </li>
                            <li className='flex items-center justify-between my-3'>
                                <span>Manufacturing Facilities </span> 
                                <BsChevronRight/>
                            </li>
                            <li className='flex items-center justify-between my-3'>
                                <span>Distribution Partners</span>  
                                <BsChevronRight/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ManufacturerDetails