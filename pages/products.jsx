import Header from "../src/components/Header";
import ProductTable from "../src/components/productstable";

function ProductPage() {
  return (
    <div className="flex-col overflow-x-hidden overflow-y-auto ">
      <Header />
      <ProductTable />
    </div>
  );
}

export default ProductPage;
