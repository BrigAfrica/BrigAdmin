/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ArrowUp } from 'iconsax-react'
 
import ParabolaCharts from './charts/ParabolaCharts'

const LevelOneCharts = ({title, price,percentage, data,type,curveStroke,curveFill}) => {
  return (
    <div className='card_widgets flex-1 h-52 flex gap-2'>

            <div id="text" className='flex flex-col justify-between  w-2/5 h-full'>
                    <div id="top">
                        <h3 className="text-base">{title}</h3>
                        <small className='text-light-gray-200'>Last 7 days </small>
                    </div>

                    <div id="mid">
                        <h1 className='text-2xl'>{price}</h1>
                    </div>

                    <div id="bottom" className='flex items-center gap-2'>
                      <small className='flex md:flex-col lg:flex-row  '>
                        <ArrowUp size="16" color="#1EB564"/>
                          <small className='text-[#1EB564]'>{percentage}</small>
                          <small className='text-light-gray-200'>
                        vs last 7 days  
                      </small>
                      </small>
                    </div>
            </div>

            <div id="charts" className='xs:max-md:h-40 h-full  w-3/5'>
                <ParabolaCharts curveStroke = {curveStroke} curveFill={curveFill} data = {data}/>
            </div>
    </div>
  )
}

export default LevelOneCharts