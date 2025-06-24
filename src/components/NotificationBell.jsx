import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {BiBell} from 'react-icons/bi'

import { BiX, BiUser, BiPhone, BiMapPin, BiHash, BiShield, BiError } from 'react-icons/bi';

const NotificationBell = () => {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [prevLength, setPrevLength] = useState(Number(localStorage.getItem("prevLength")) || 0)
    const [modalOpen, setModalOpen] = useState(false)


    //simulating adding a new alert
    const simulateNewScan = () => {
     const newScan = {
       id: Date.now(),
      productName: `Fake Product ${notifications.length + 1}`
     };
     const updatedNotification = [...notifications, newScan];
     setNotifications(updatedNotification);

     const newItemsCount = updatedNotification.length - prevLength;
     if(newItemsCount > 0){
      setUnreadCount(newItemsCount)
     }
    }

    const fetchFakeScans = async () => {
        
      try {
          const response = await axios.get("https://medscan-backend-4lgk.onrender.com/api/products/all/fake/products");
          const data = response.data;
           const userFakeScans = data.fakeProducts.flatMap(data => data.userFakeScans)
            console.log(userFakeScans)

            if (!Array.isArray(userFakeScans)) return;
            setNotifications(userFakeScans)

            const newItemsCount = data.length - prevLength;
            if (newItemsCount > 0){
              setUnreadCount(newItemsCount)
            }
            setPrevLength(data.length);
            
            localStorage.setItem("prevLength", prevLength);
            
            
          } catch (error) {
            console.log("axios error fetching fake scans", error)
          }
          
        }
        useEffect(() => {
      fetchFakeScans()
      //consume the api every 10 seconds to check if there is a recent fake scan alert
      const interval = setInterval(() => fetchFakeScans, 10000);

      return () => clearInterval(interval);
    
      
    }, []);

    const markAsRead = () => {
      if(!(modalOpen === true)){
      setUnreadCount(0);
      }
         setPrevLength(notifications.length);
          setModalOpen(!modalOpen)
    }

    localStorage.setItem("prevLength", prevLength);

  return (
    <>
    <div>
      
      {/* <div onClick={simulateNewScan} className='bg-red-500 cursor-pointer px-4 py-1 text-center ' >Simulate Scan</div>
*/}
      <div className="bell cursor-pointer relative ">

        <button className='' onClick={markAsRead} ><BiBell className='text-3xl  ' /></button>
        {unreadCount > 0 && !modalOpen &&(
          <span className='absolute -right-2 -top-1 bg-red-600 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs ' >{unreadCount}</span>
        )}
        <div className={` ${modalOpen? "block" : "hidden" } backdrop bg-black bg-opacity-50 w-full h-full inset-0 fixed `} ></div>
      <Modal data={notifications} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </div>
      </>
  );
}

export default NotificationBell;


export const Modal = ({ data, modalOpen, setModalOpen }) => {
  if (!modalOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity"
        onClick={() => setModalOpen(false)}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <BiError className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Security Alerts</h2>
                <p className="text-sm text-gray-500">Suspicious product scans detected</p>
              </div>
            </div>
            <button 
              onClick={() => setModalOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <BiX className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden ">
            {data && data.length > 0 ? (
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {data.length} suspicious {data.length === 1 ? 'scan' : 'scans'} found
                  </span>
                  <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full">
                    <BiShield className="w-3 h-3" />
                    High Priority
                  </div>
                </div>
                
                <div className="space-y-3 max-h-96 overflow-y-auto pb-40 px-2 custom-scrollbar">
                  {data.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                            <BiUser className="w-4 h-4 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {item.scannerName || "Unknown Scanner"}
                            </h4>
                            <p className="text-xs text-gray-500 capitalize">
                              {item.scannerRole || "Unknown Role"}
                            </p>
                          </div>
                        </div>
                        <div className="text-xs text-gray-400">
                          Scan #{index + 1}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <BiHash className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">Product Code:</span>
                          <code className="bg-white px-2 py-1 rounded text-xs font-mono border">
                            {item.productCode || "N/A"}
                          </code>
                        </div>
                        
                        {item.scannerPhoneNumber && (
                          <div className="flex items-center gap-2">
                            <BiPhone className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">Phone:</span>
                            <span className="text-gray-900">{item.scannerPhoneNumber}</span>
                          </div>
                        )}
                        
                        {item.scannerLocation && (
                          <div className="flex items-center gap-2 md:col-span-2">
                            <BiMapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">Location:</span>
                            <span className="text-gray-900">{item.scannerLocation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 px-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <BiShield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">All Clear!</h3>
                <p className="text-gray-500 text-center">
                  No suspicious scans have been detected at this time.
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          {data && data.length > 0 && (
            <div className="border-t border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Last updated: {new Date().toLocaleString()}
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    Dismiss
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                    Take Action
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-in {
          animation: animate-in 0.2s ease-out;
        }
        
        .zoom-in-95 {
          animation-fill-mode: both;
        }
      `}</style>
    </>
  );
};