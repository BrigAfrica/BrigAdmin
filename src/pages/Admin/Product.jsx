 
import Sidebar from '../../components/reuse/Sidebar'
import ProductMain from '../../components/admin/product/ProductMain'

const Product = () => {
  return (
    <div className='flex min-h-screen'>
        <section className='w-2/12 xs:max-lg:w-2 '>
            <Sidebar/>
        </section>
        <section className='w-10/12 xs:max-lg:w-full'>
            <ProductMain/>
        </section>
    </div>
  )
}

export default Product