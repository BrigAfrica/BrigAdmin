 

import ProfileCard from './ProfileCard'
import PersonalActivityCards from './PersonalActivityCards'
import DashboardNav from '../dashboard/DashboardNav'
import FilterSearchExport from '../dashboard/FilterSearchExport'
import OrderManagementTable from '../orderManagement/OrderManagementTable'


const CustomerOverviewMain = () => {
  return (
    <div className='mx-5 '>
        <DashboardNav title= "Customers" subTitle= "Customer Overview"/>
        <ProfileCard/>
        <PersonalActivityCards/>
        <FilterSearchExport type= "dashboard"/>
        <OrderManagementTable/>
   

    </div>
  )
}

export default CustomerOverviewMain