 
import Sidebar from '../../components/reuse/Sidebar'
import NewProductMain from '../../components/admin/newproduct/NewProductMain'

const NewProduct = () => {
  return (
    <div className='flex min-h-screen '>
            <section className='w-2/12 xs:max-lg:w-2 '>
                <Sidebar/>
            </section>
            <section className='w-10/12 xs:max-lg:w-full'>
                <NewProductMain/>
            </section>
    </div>
  )
}

export default NewProduct