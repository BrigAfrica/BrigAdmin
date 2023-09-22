 
import AdminRolesMain from '../../components/admin/adminroles/AdminRolesMain'
import Sidebar from '../../components/reuse/Sidebar'

const AdminRoles = () => {
  return (
    
        <div className='flex min-h-screen bg-[#FAFAFA] w-screen '>

                <div className='w-2/12 xs:max-lg:w-1 relative'>
                    <Sidebar/>
                </div>
                <div className='xs:max-lg:w-full  lg:w-10/12 '>
                    <AdminRolesMain/>
                </div>

        </div>
   
  )
}

export default AdminRoles