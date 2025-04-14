import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {BiBell, BiX} from 'react-icons/bi'

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

const Modal = ({data, modalOpen, setModalOpen}) => {

  return(
    <div className={` bg-white py-3 border-black shadow-md rounded-md max-h-[400px]  ${modalOpen? "flex-col flex " : "hidden"} fixed top-[30%] left-[40%]  w-[500px]   `} >
      <div className="flex justify-between items-center border-b border-black border-opacity-20 ">
      <span className='text-3xl p-3 font-bold flex gap-x-3 items-center ' > Notifications Alert</span>
      <BiX className='text-4xl my-3 mx-5 font-bold flex hover:cursor-pointer ' onClick={()=> {setModalOpen(!modalOpen)}} />
      </div>
    {
      data.length > 0 ? ( 
        <ul className='w-full overflow-y-auto ' >
          {data.map((item, index) => (
            <div className="mx-2 text-sm p-2 border-[#ddd] border-2 rounded-md my-3 shadow-sm " >
              <div className="flex justify-between items-center px-2 py-1 " >
            <li> <span className='text-xs   ' >Scanned By: </span> {item.scannerName || "scannerName"}</li>
            <li><span className='text-xs   ' >Product Id: </span> {item.productCode || "productCode" } </li>
              </div>
            <li className="text-start px-2" > <span className='text-xs   ' >Role: </span> {item.scannerRole || "role"}</li>
            </div>
          ))}
        </ul>
      ) : (
        <div className='text-xl text-center my-5 ' >No Fake Scans</div>
      )
    }
    </div>
  )
}
