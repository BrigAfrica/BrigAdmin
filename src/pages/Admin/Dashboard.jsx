 
import Sidebar from '../../components/reuse/Sidebar'
import MainContent from '../../components/admin/dashboard/MainContent'


const Dashboard = () => {
  return (
    <div className='flex min-h-screen bg-[#FAFAFA] w-screen '>

        <div className='w-2/12 xs:max-lg:w-2 relative'>
            <Sidebar/>
        </div>
        <div className='xs:max-lg:w-full  lg:w-10/12 px-5'>
            <MainContent/>
        </div>

    </div>
  )
}

export default Dashboard