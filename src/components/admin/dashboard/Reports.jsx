import dotsVertical from '../../../assets/icons/dotsVertical.svg';
import ReportChart from './charts/ReportChart';


const reportsData = [
  {
    price:"24k",
    title:"Customers"
  },

  {
    price:"3.5k",
    title:"Total products"
  },

  {
    price:"2.5k",
    title:"Stock Products"
  },

  {
    price:"0.5k",
    title:"Out of stock"
  },

  {
    price:"250k",
    title:"Revenue"
  },
]

const Reports = () => {
  return (
    <div className='card_widgets w-8/12 xs:max-md:w-full'>
        <header className='flex justify-between'>
          <div >
            <h1 className='text-bold text-xl'> Reports </h1>
            <p className='text-light-gray-200 '>Last 7 days </p>
          </div>

          <img src={dotsVertical} alt="" />
        </header>

        <div id="mainReport" className='mb-11 mt-6 flex xs:max-md:gap-1 gap-5'>

          {

            reportsData.map((item,idx) => (

                <div key = {idx} className='block xs:max-md:w-16 xs:max-md:h-12 w-28 h-20 px-2 py-4 
                border-b-[2px] border-[#E9E7FD]
                hover:border-b-4 hover:border-[#0C837E] text-center
                
                transition
               hover:report_gradient cursor-pointer'
                > 

                  <h1 className='xs:max-md:text-base text-2xl mb-1'>{item.price}</h1>
                  <p className='text-light-gray-200 xs:max-md:text-xs text-sm'>{item.title}</p>
                </div>

            ))
          }
        
        </div>


        <div id="chart" className='xs:max-lg:h-52 h-72 lg:'>
            <ReportChart/>
        </div>
    </div>
  )
}

export default Reports