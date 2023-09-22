import FilterSearchExport from "../dashboard/FilterSearchExport"
import DashboardNav from "./../../../components/admin/dashboard/DashboardNav"
import OrderManagementTable from "./OrderManagementTable"

const OrderMainComponent = () => {
  return (
    <div className="h-screen w-full px-5">
        <DashboardNav title = "Order Management"/>
        <FilterSearchExport type = "orderManagement"/> 
        <OrderManagementTable/>
    </div>
  )
}

export default OrderMainComponent