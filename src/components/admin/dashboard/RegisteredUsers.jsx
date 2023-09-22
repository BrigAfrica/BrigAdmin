 
import RegisteredCharts from './charts/RegisteredCharts'
import flag from "../../../assets/illustrations/flag.svg"
import { ArrowDown2, ArrowUp2 } from 'iconsax-react'
import ProgressBar from './../../reuse/ProgressBar'




const salesData = [
    {
        flag,
        cashSales: "30k",
        country: "United States",
        percentage: 25.8,
        type: "increment",
        ProgressBarFill:"#4339F2"
    },
    {
        flag,
        cashSales: "26k",
        country: "Brazil",
        percentage: 16.2,
        type: "decrement",
        ProgressBarFill:"#34B53A"
    },  
    {
        flag,
        cashSales: "22k",
        country: "India",
        percentage: 12.3,
        type: "increment",
        ProgressBarFill:"#FFB200"

    },   
    {
        flag,
        cashSales: "17k",
        country: "Austaralia",
        percentage: 11.9,
        type: "decrement",
        ProgressBarFill:"#FF7070"

    },
]
const RegisteredUsers = () => {
  return (
    <div className='card_widgets w-full h-full lg:w-4/12'>
        
        <div id="text">
            <h1 className='text-xl'>Registered Users</h1>
            <h1 className="text-3xl font-black my-2">
                16.5k
            </h1>
            <p>Users per minute</p>
        </div>

        <div id="areachart" className='w-full h-44 xs:max-lg:h-52 '>
            <RegisteredCharts/>
        </div>

        <div id="countrySales">
            <div id="topic" className='flex justify-between lg:gap-9 mt-3 xs:max-lg:px-2 px-6 xs:max-lg:text-base text-xl'>
                <h1>Sales by Country</h1>
                <h1>Sales </h1>
            </div>

            <ul className='mt-2'>
                
                {

                    salesData.map((item, idx) => (

                            <li key = {idx} className='flex justify-between xs:max-md:gap-3 lg:gap-7 mb-1 items-center' >
                                <div id="flag">
                                    <img src={item.flag} alt="" />
                                </div>
                                <div id="countrysales" className=' w-32'>
                                    <h3>{item.cashSales}</h3>
                                    <p className='xs:max-lg:text-sm '>{item.country}</p>
                                </div>
                                <div id="progressbar" className='w-44'>
                                        <ProgressBar 
                                                    bgColor= {`${item.ProgressBarFill}`}
                                                    percentage={item.percentage}
                                                    barWidthInpx={200}
                                                    />  
                                </div>
                                <div id="salesInPercent" className='flex items-center gap-1'>
                                    {
                                        item.type == "increment" ?
                                        <ArrowUp2 size="20" color="#1EB564" />
                                        : <ArrowDown2  size="20" color="#EA5455" />
                                    }
                                    <p className= {`${item.type == "increment"? 
                                                        `text-[#1EB564]`:
                                                        `text-[#EA5455]`}`
                                                        
                                                    }
                                    >
                                        {item.percentage}%
                                                            
                                    </p>
                                </div>
                        </li>

                    ))
        }
            </ul>
        </div>

    </div>
  )
}

export default RegisteredUsers