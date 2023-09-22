 
import CustomerMainComponent from '../../components/admin/customer/CustomerMainComponent'
import Sidebar from '../../components/reuse/Sidebar'

const Customer = () => {
  return (
    <div className='flex min-h-screen bg-[#FAFAFA] w-screen '>

            <div className='w-2/12 xs:max-lg:w-2 relative'>
                <Sidebar/>
            </div>
            <div className='xs:max-lg:w-full  lg:w-10/12 '>
                <CustomerMainComponent/>
            </div>

    </div>
  )
}

export default Customer

