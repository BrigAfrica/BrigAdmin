 
import DashboardNav from '../dashboard/DashboardNav'
import ProductFilters from './ProductFilters'
import ProductCards from './ProductCards'
import ProductTable from './ProductTable'

const ProductMain = () => {
  return (
    <div className='mx-5'>
        <DashboardNav title= "Product" subtitle = ""/>
        <ProductFilters/>
        <ProductCards/>
        <ProductTable/>
    </div>
  )
}

export default ProductMain