 
import Sidebar from '../../components/reuse/Sidebar'
import OrderMainComponent from './../../components/admin/orderManagement/OrderMainComponent'



const OrderManagement = () => {
  return (
    <div className='flex min-h-screen bg-[#FAFAFA] w-screen '>

    <div className='w-2/12 relative'>
        <Sidebar/>
    </div>
    <div className='xs:max-lg:w-full  lg:w-10/12'>
     <OrderMainComponent/>
    </div>

</div>
  )
}

export default OrderManagement