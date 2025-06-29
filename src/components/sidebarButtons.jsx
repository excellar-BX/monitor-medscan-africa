import homeicon from '../icons/homeicon.svg';
import setting from "../icons/setting.svg";
import producticon from "../icons/producticon.svg";
import profile from "../icons/profile.svg";
import { BiHeadphone, BiSupport } from 'react-icons/bi';


    let styleOne= "w-full h-[55px] cursor-pointer flex flex-row items-center  gap-3  px-5 bg-white";
    let styleTwo= "w-full h-[55px] cursor-pointer flex flex-row items-center  gap-3  px-5 bg-blue ";
    let textstyleone= 'font-jarkatasans w-[56px] h-[25px] text-[17px] font-light leading-[25.2px] tracking-[-0.05em] text-left text-limewhite'
    let textstyletwo= 'font-jarkatasans w-[56px] h-[25px] text-[17px] font-medium leading-[25.2px] tracking-[-0.05em] text-left text-black'


function HomeButton({active}) {
    return(
        <div className={active.active && active.id==1 ? styleTwo  : styleOne } >
           <div className='w-[24px] h-[24px] mt-[4px] '>
           <img className='w-[20px] h-[20.8px] ' src={homeicon} alt="home icon" />
           </div>
           <p className={active.active && active.id==1? textstyleone:textstyletwo }>
            Home
           </p>
        </div>
    )
}

function ProductButton({active}) {
    return(
        <div className={active.active && active.id==2 ? styleTwo: styleOne } >
           <div className='w-[24px] h-[24px] mt-[4px] '>
           <img className='w-[20px] h-[20.8px] ' src={producticon} alt="Products icon" />
           </div>
           <p className={active.active && active.id==2 ? textstyleone:textstyletwo }>
            Products
           </p>
        </div>
    )
}

function ManufacturerButton({active}) {
    return(
        <div className={active.active && active.id==3 ? styleTwo: styleOne } >
           <div className='w-[24px] h-[24px] mt-[4px] '>
           <img className='w-[20px] h-[20.8px] ' src={profile} alt="profile icon" />
           </div>
           <p className={active.active && active.id==3 ? textstyleone:textstyletwo }>
            Manufacturers
           </p>
        </div>
    )
}

function SettingsButton({active}) {
    return(
        <div className={active.active && active.id==4 ? styleTwo: styleOne } >
           <div className='w-[24px] h-[24px] mt-[4px] '>
           <img className='w-[20px] h-[20.8px] ' src={setting} alt="setting icon" />
           </div>
           <p className={active.active && active.id==4 ? textstyleone:textstyletwo }>
            Settings
           </p>
        </div>
    )
}

function SupportButton({active}) {
    return(
        <div className={active.active && active.id==5 ? styleTwo: styleOne } >
           <div className='w-[24px] h-[24px] mt-[4px] '>
            <BiSupport/>
           </div>
           <p className={active.active && active.id==5 ? textstyleone:textstyletwo }>
            Support
           </p>
        </div>
    )
}


export{HomeButton,ProductButton,ManufacturerButton,SettingsButton,SupportButton}