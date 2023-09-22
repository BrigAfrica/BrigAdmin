 
import Sidebar from '../../components/reuse/Sidebar'
import PaymentMain from '../../components/admin/payment/PaymentMain'

const Payment = () => {
  return (
    <div className='flex '>
            <section className='w-2/12 '>
                <Sidebar/>
            </section>
            <section className='w-10/12 xs:max-lg:w-full'>
                <PaymentMain/>
            </section>
    </div>
  )
}

export default Payment