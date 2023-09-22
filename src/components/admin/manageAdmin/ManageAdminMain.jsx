 import DashboardNav from '../dashboard/DashboardNav'
import FilterSearchExport from './../dashboard/FilterSearchExport'
import AdminTable from './AdminTable'

const ManageAdminMain = () => {
  return (
    <div className='mx-5'>
        <DashboardNav title={"Admin"}/>
        <FilterSearchExport type={"admin"}/>
        <AdminTable/>
    </div>
  )
}

export default ManageAdminMain