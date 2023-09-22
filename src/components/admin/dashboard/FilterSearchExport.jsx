/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ImportSquare, SearchNormal1 } from 'iconsax-react'
import  { useEffect, useState } from 'react'
import Selectdropdown from '../../forms/Selectdropdown'
import {  useForm } from 'react-hook-form';
import axios from 'axios';
import InputField from './../../forms/InputField'



const serviceTypeOptions = 
["Repair", "Swap", "Buy", "Sell"];

const statusOptions = 
["Cancelled", "Shipped","Delivered", "Confirmed", "Processing", "Error"]

const FilterSearchExport = ({type}) => {

  const {
    register,
    formState: { errors },
} = useForm();

const [filter,setFilter] = useState({
        date: "",
        service: "",
        status: "",

})

console.log(filter)


const handleFilterChange = (e) => {
  const {name, value} = e.target
  setFilter((prev) => ({
    ...prev,
    [name]:value,
  }))
  


}

useEffect(() => {
  const getProductsByStatus = async () => {
    try{
      const results = await axios.get(`https://brigfrontend.onrender.com/orders/getAllOrders`)
      console.log(results)
    }catch(e){
      console.log(e.message)
    }

}
},[])

  return (
    <div className={`flex 
                    xs:max-md:flex-col  
                    xs:max-md:gap-y-3 
                    flex-row 
                    justify-between 
                    my-5 
                    w-full`
                  }>
          <div id="left" 
              className='flex  
                  flex-row 
                  gap-5 
                  items-center'
          >

              <label htmlFor="" 
                  className='border border-red-500'>
                    Start:
              </label>
              <InputField 
                inputType = {'date'}
                name = {"startDate"}
                bgColor = {"bg-[#fff]"}
                width = {"w-36"}
                border = {"border border-light-green-100"}
                
              />

              <label htmlFor="">End:</label>
                
              <InputField 
                inputType = {'date'}
                bgColor = {"bg-[#fff]"}
                name = {"endDate"}
                width = {"w-36"}
                border = {"border border-light-green-100"}
                
                />
        
                <div className={`

                  ${type === "dashboard" ? "flex" : "hidden"}
                  ${type === "customers" ? "flex order-3" : "order-2"}
                  justify-between 
                  bg-white
                  items-center px-3
                  text-[#003937B2] 
                  shadow-md
                  sm:max-lg:w-44
                  lg:w-80
                  rounded-md h-12 `}
                >

                  <input type='text' 
                        className = {`focus:ring-0 
                                    outline-none 
                                    xs:max-lg:w-3/4`
                                  }
                        name= "search"
                        id=""
                        placeholder='Search'
                  />
                       <SearchNormal1 size="20" color="#7b8b8aae"/>
                  </div>
                      
                  <div className={`
                    ${type == "dashboard" && "hidden"}
                    ${type == "customers" && "hidden"}
                  `}>

                              <Selectdropdown
                                
                                inputName={"service"}
                                placeholder = {"Service Type"}
                                options = {serviceTypeOptions}
                                onChange={handleFilterChange}
                                value = {filter.service}
                              />  

                  </div>

                  <div className={`${type == "dashboard" && "hidden"}`}>

                              <Selectdropdown
                
                                inputName={"status"}
                                placeholder = {"Status"}
                                options = {statusOptions} 
                                onChange={handleFilterChange}
                                value={filter.status}
                              />

                  </div>
          </div>


          <div id="right">
              <div className='border-[0.5px] 
                          border-light-green-100 
                          bg-white
                          xs:max-md:w-36
                          flex gap-2 
                          items-center 
                          p-3 rounded-md 
                          shadow-md'
              >
                  <h1 className='text-[#003937B2]
                            font-normal 
                            xs:max-md:text-xs'
                  >
                    Export as CSV
                  </h1>
                <ImportSquare size="20" color="#003937B2"/>
              </div>

              <div className={`${type ==  "admin" ? "flex" : "hidden"}`}>
                Add New User
              </div>
          </div>
    </div>
  )
}

export default FilterSearchExport