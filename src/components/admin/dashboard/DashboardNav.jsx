import { ArrowRight2, HambergerMenu, NotificationBing } from 'iconsax-react'
import { ToggleContext } from '../../../context/toggleContext'
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'

// eslint-disable-next-line react/prop-types
const DashboardNav = ({title,subTitle}) => {

  const {isSidebarOpen,setIsSidebarOpen} = useContext(ToggleContext)

  const handleClick = () => {
    setIsSidebarOpen(prevState => !prevState)
    console.log(isSidebarOpen)
  }
  return (

    <div>
    <div className='flex justify-between items-center  py-3 my-5 '>
        <div className='xs:max-lg:flex hidden gap-2 justify-items-start cursor-pointer' onClick={handleClick}>
          <HambergerMenu size="24" color="#AFB3BA" variant="TwoTone"/>
        </div>

        <div id="text" className='xs:max-lg:mr-auto xs:max-lg:pl-5'>
            <h3 className='text-2xl font-black'>{title}</h3>
        </div>
    
        <div id="icons" className='flex items-center gap-2 sm:gap-6'>
          <div className='relative hover:cursor-pointer'>
             <NotificationBing color="#4B465C" variant="TwoTone"/>
              <div className='notification__bell'> 4 </div>
          </div>
             <div className='border-4 
                          h-8 w-8 md:h-10 md:w-10 rounded-full
                           bg-light-green-100'>
                          
                           </div>
        </div>
    </div>

  <div className='flex text-sm gap-2 items-center' >
    <small>Home</small>
    <ArrowRight2 size="16" color="#000" variant="TwoTone"/>
    <small>{title}</small>
    <ArrowRight2 size="16" color="#000" variant="TwoTone"/>
    <small>{subTitle}</small>
  </div>
</div>



  )
}

export default DashboardNav