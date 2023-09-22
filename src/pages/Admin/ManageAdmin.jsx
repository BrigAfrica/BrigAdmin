 
import Sidebar from '../../components/reuse/Sidebar'
import ManageAdminMain from '../../components/admin/manageAdmin/ManageAdminMain'

const ManageAdmin = () => {
  return (
    <div className='flex min-h-screen bg-[#FAFAFA] '>
        <section className='w-2/12 border border-red-500'>
            <Sidebar/>
        </section>
        <section className='w-10/12 xs:max-lg:w-full'>
            <ManageAdminMain/>
        </section>
    </div>
  )
}

export default ManageAdmin