import { HomeButton,ProductButton,ManufacturerButton,SettingsButton } from "../src/components/sidebarButtons"

function HomeDahboard() {
    return(
     <div className="flex flex-row">
        <div className="w-[20.5%]" id="sidebar">
            <ul className="mt=[220px]">
             <li><HomeButton /></li>
             <li><ProductButton /></li>
             <li><ManufacturerButton /></li>
             <li><SettingsButton /></li>
            </ul>

        </div>
         <div className="w-[79.5%]" id="details">

         </div>
     </div>
    )
}


export default HomeDahboard