import homeicon from '../icons/homeicon.svg';
import setting from "../icons/setting.svg";
import producticon from "../icons/producticon.svg";
import profile from "../icons/profile.svg";


function HomeButton({active}) {
    let styleOne= "w-[294px] h-[65px] flex flex-row gap-[8px] py-[55px] px-[55px] bg-white";
    let styleTwo= "w-[294px] h-[65px] flex flex-row gap-[8px] py-[55px] px-[55px] bg-blue ";
    let textstyleone= 'font-jarkatasans w-[56px] h-[25px] text-[20px] font-medium leading-[25.2px] tracking-[-0.05em] text-left text-white'
    let textstyletwo= 'font-jarkatasans w-[56px] h-[25px] text-[20px] font-medium leading-[25.2px] tracking-[-0.05em] text-left text-black'
    return(
        <div className={active ? styleTwo: styleOne } >
           <div className='w-[24px] h-[24px] '>
           <img className='w-[20px] h-[20.8px] ' src={homeicon} alt="home icon" />
           </div>
           <p className={active? textstyleone:textstyletwo }>
            Home
           </p>
        </div>
    )
}

function ProductButton({active,textcolor}) {
    let styleOne= "w-[294px] h-[65px] flex flex-row gap-[8px] py-[55px] px-[55px] bg-white";
    let styleTwo= "w-[294px] h-[65px] flex flex-row gap-[8px] py-[55px] px-[55px] bg-blue ";
    let textstyleone= 'font-jarkatasans w-[56px] h-[25px] text-[20px] font-medium leading-[25.2px] tracking-[-0.05em] text-left text-white';
    let textstyletwo= 'font-jarkatasans w-[56px] h-[25px] text-[20px] font-medium leading-[25.2px] tracking-[-0.05em] text-left text-black';
    return(
        <div className={active ? styleTwo: styleOne } >
           <div className='w-[24px] h-[24px] '>
           <img className='w-[20px] h-[20.8px] ' src={producticon} alt="Products icon" />
           </div>
           <p className={active? textstyleone:textstyletwo }>
            Products
           </p>
        </div>
    )
}

function ManufacturerButton({active}) {
    let styleOne= "w-[294px] h-[65px] flex flex-row gap-[8px] py-[55px] px-[55px] bg-white";
    let styleTwo= "w-[294px] h-[65px] flex flex-row gap-[8px] py-[55px] px-[55px] bg-blue ";
    let textstyleone= 'font-jarkatasans w-[56px] h-[25px] text-[20px] font-medium leading-[25.2px] tracking-[-0.05em] text-left text-white'
    let textstyletwo= 'font-jarkatasans w-[56px] h-[25px] text-[20px] font-medium leading-[25.2px] tracking-[-0.05em] text-left text-black'
    return(
        <div className={active ? styleTwo: styleOne } >
           <div className='w-[24px] h-[24px] '>
           <img className='w-[20px] h-[20.8px] ' src={profile} alt="profile icon" />
           </div>
           <p className={active? textstyleone:textstyletwo }>
            Manufacturers
           </p>
        </div>
    )
}

function SettingsButton({active}) {
    let styleOne= "w-[294px] h-[65px] flex flex-row gap-[8px] py-[55px] px-[55px] bg-white";
    let styleTwo= "w-[294px] h-[65px] flex flex-row gap-[8px] py-[55px] px-[55px] bg-blue ";
    let textstyleone= 'font-jarkatasans w-[56px] h-[25px] text-[20px] font-medium leading-[25.2px] tracking-[-0.05em] text-left text-white'
    let textstyletwo= 'font-jarkatasans w-[56px] h-[25px] text-[20px] font-medium leading-[25.2px] tracking-[-0.05em] text-left text-black'
    return(
        <div className={active ? styleTwo: styleOne } >
           <div className='w-[24px] h-[24px] '>
           <img className='w-[20px] h-[20.8px] ' src={setting} alt="setting icon" />
           </div>
           <p className={active? textstyleone:textstyletwo }>
            Settings
           </p>
        </div>
    )
}


export{HomeButton,ProductButton,ManufacturerButton,SettingsButton}