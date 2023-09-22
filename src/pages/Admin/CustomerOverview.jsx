 
import Sidebar from '../../components/reuse/Sidebar'
import CustomerOverviewMain from './../../components/admin/customeroverview/CustomerOverviewMain'
const CustomerOverview = () => {
  return (
    <div className='flex min-h-screen bg-[#FAFAFA] w-screen '>

        <div className='w-2/12 xs:max-lg:w-2 relative'>
            <Sidebar/>
        </div>
        <div className='xs:max-lg:w-full  lg:w-10/12 '>
            <CustomerOverviewMain/>
        </div>

    </div>
  )
}

export default CustomerOverview
