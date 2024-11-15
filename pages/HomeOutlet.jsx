import Header from "../src/components/Header";
import { ProductCard,WelcomeMessage,ManufacturerCard } from "../src/components/infocard";
import Table from "../src/components/table";

function HomeOutlet() {
    return(
        <div className="flex-col overflow-x-hidden overflow-y-auto " >
          <Header />
          <WelcomeMessage />
          <div className="flex ml-[109px] gap-[45px] ">
            <ProductCard />
            <ManufacturerCard />
          </div>
          <Table />
        </div>
    )
}


export default HomeOutlet;