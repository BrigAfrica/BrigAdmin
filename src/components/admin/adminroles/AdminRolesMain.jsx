import DashboardNav from './../../../components/admin/dashboard/DashboardNav'
import AdminProfileInfo from './AdminProfileInfo'

const AdminRolesMain = () => {
  return (
    <div className='mx-5'>
        <DashboardNav title={"Admin"}/>
        <AdminProfileInfo/>
    </div>
  )
}

export default AdminRolesMain