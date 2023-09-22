 
import DashboardNav from './../dashboard/DashboardNav'
import ProductInfo from './ProductInfo'

const NewProductMain = () => {
  return (
    <div className='mx-5'>
          <DashboardNav title={"Product"} subTitle={"New Product"}/>
          <ProductInfo/>
    </div>
  )
}

export default NewProductMain