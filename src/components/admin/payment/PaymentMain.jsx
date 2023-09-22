 
import DashboardNav from '../dashboard/DashboardNav'
import FilterSearchExport from '../dashboard/FilterSearchExport'
import OrderManagementTable from './../orderManagement/OrderManagementTable'
import PaymentModal from './PaymentModal'

const PaymentMain = () => {
  return (
    <div className='mx-4'>
        <DashboardNav title= "Payment"/>
        <FilterSearchExport/>
        <OrderManagementTable/>
        <PaymentModal/>
    </div>
  )
}

export default PaymentMain