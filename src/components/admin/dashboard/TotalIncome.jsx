/* eslint-disable no-unused-vars */
import { ArrowUp } from 'iconsax-react'
 
import LineChart from './charts/TotalIncomeChart'
import TotalIncomeChart from './charts/TotalIncomeChart'

const TotalIncome = () => {
  return (
    <div className=' xs:max-lg:w-full lg:flex-1 
                
                card_widgets h-60 flex
                flex-row
                xs:max-md:h-80 
                xs:max-md:flex-col 
                gap-2 items-center'
    >
            <div id="text" className='flex  md:flex-col justify-between 
                        xs:max-md:w-full md:w-2/6
                        xs:max-md:items-center
                      h-full 
                     '>
                    <div id="top">
                        <h3 className="text-base">Total Income</h3>
                        <small className='text-light-gray-200'>Last 7 days </small>
                    </div>
                    <div id="mid">
                        <h1 className='text-2xl'>$350k</h1>
                    </div>
                    <div id="bottom" className='flex items-center gap-2'>
                      <small className='flex'>
                        <ArrowUp size="16" color="#1EB564"/>
                        <small className='text-[#1EB564]'>8.56k</small>
                      </small>
                      <small className='text-light-gray-200'>
                        vs last 7 days  
                      </small>
                    </div>
            </div>

            <div id="charts" className='h-full w-[100%] md:w-4/6 '>
                    <TotalIncomeChart/>
            </div>
    </div>

 
  )
}

export default TotalIncome