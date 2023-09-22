 
import dotsVertical from '../../../assets/icons/dotsVertical.svg';
import { ArrowUp } from 'iconsax-react';
const TodayOrder = () => {
  return (
    <div className='card_widgets flex xs:max-lg:w-full w-3/12 flex-col'>

        <header>
            <div className='flex justify-between'>
              <h1>Today Order</h1>
              <img src={dotsVertical} alt="" />
            </div>

            <div className='flex justify-between items-center mt-8 mb-6'>
              <h1 className='text-3xl font-extrabold'>16.5k</h1>
              <small className='text-[#1EB564] flex gap-1'>
              <ArrowUp size="16" />
              <small> 6%<span className='text-light-gray-200'> &nbsp; vs last day</span> </small>
              </small>
            </div>
        </header>

        <div id="chart">
          <small className='text-light-gray-200'>Orders Over time</small>
        </div>



    </div>
  )
}

export default TodayOrder