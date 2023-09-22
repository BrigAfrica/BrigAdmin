import dotsVertical from "../../../assets/icons/dotsVertical.svg"
import ProductTables from "./tables/ProductTables"


const ProductsBest = () => {
  return (
    <div className="card_widgets flex flex-col flex-1 gap-y-6 ">
        <header className="flex justify-between ">
            <h1 className="">Best Selling Products</h1>
            <img src={dotsVertical} alt="" />
        </header>

        <div id="charts">
            <ProductTables/>
        </div>
    </div>
  )
}

export default ProductsBest