 import DashboardNav from '../dashboard/DashboardNav'
import FilterSearchExport from '../dashboard/FilterSearchExport'
import CustomerTable from './CustomerTable'
import PaymentModal from '../payment/PaymentModal'

const CustomerMainComponent = () => {
  return (
    <div className='mx-4'>
        <DashboardNav title= "Customers"/>
        <FilterSearchExport type = "customers"/>
        <CustomerTable/>
        <PaymentModal/>
        
            
    </div>
  )
}

export default CustomerMainComponent