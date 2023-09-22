/* eslint-disable react/prop-types */
import { SearchNormal1 } from 'iconsax-react'
 


    // ${type === "dashboard" ? "flex" : "hidden"}
    // ${type === "customers" ? "flex order-3" : "order-2"}


const SearchbarWithIcon = ({placeholder,width}) => {
  return (
    <div className={`
    flex
    justify-between 
    bg-white
    items-center px-3
    text-[#003937B2] 
    shadow-md
    ${width ? width : 'sm:w-44 lg:w-80' }
    
    rounded-md h-12 `}
  >

    <input type='text' 
          className = "focus:ring-0 outline-none xs:max-lg:w-3/4"
          name="" id=""
          placeholder= {placeholder}
    />
         <SearchNormal1 size="20" color="#7b8b8aae"/>
    </div>
  )
}

export default SearchbarWithIcon