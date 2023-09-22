import { ArrowUp } from 'iconsax-react'
 
import ParabolaCharts from './charts/ParabolaCharts'

const TotalProfit = () => {
  return (
    <div className='card_widgets xs:max-lg:w-full w-5/12  h-60 flex gap-2'>


            <div id="text" className='flex flex-col justify-between  w-2/5 h-full'>
                    <div id="top">
                        <h3 className="text-base">Total Profit</h3>
                        <small className='text-light-gray-200'>Last 7 days </small>
                    </div>
                    <div id="mid">
                        <h1 className='text-2xl'>50k</h1>
                    </div>
                    <div id="bottom" className='flex items-center gap-2'>
                      <small className='flex'>
                        <ArrowUp size="16" color="#1EB564"/>
                        <small className='text-[#1EB564]'>6%</small>
                      </small>
                      <small className='text-light-gray-200'>
                        vs last 7 days  
                      </small>
                    </div>
            </div>

            <div id="charts" className='h-full w-3/5'>
                <ParabolaCharts curveStroke= "#0FB1AA" curveFill = "#EEFFFE"/>
            </div>
    </div>
    
  )
}

export default TotalProfit