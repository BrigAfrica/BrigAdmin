 
import Selectdropdown from '../../forms/Selectdropdown'
import SearchbarWithIcon from '../../forms/SearchbarWithIcon'
import { AddCircle, ImportSquare } from 'iconsax-react'



const productOptions = ["product","iPhone 14","iPhone 13","iPhone 12","iPhone 11","iPhone XR"]
const statusOptions = ["status","Out of stock", "low stock", "In stock"]
const ProductFilters = () => {
  return (
    <div className='flex 
      xs:max-lg:flex-col
      xs:max-lg:gap-y-3 
      flex-row 
      justify-between 
      mt-6'>
        <div className='flex gap-4'>
                <Selectdropdown placeholder= "product" options={productOptions} width= "w-44"/>
                <Selectdropdown placeholder= "status" options={statusOptions} width= "w-44"/>
                <SearchbarWithIcon placeholder= "Search" width = "lg:w-72"/>
        </div>

        <div className='flex gap-3'>
            <div className='border-[0.5px] 
                            border-light-green-100 
                            bg-white
                            xs:max-md:w-36

                            flex gap-2 items-center 
                            p-3 rounded-md shadow-md'
                >
                    <h1 className='text-[#003937B2]
                                font-normal xs:max-md:text-xs'
                    >
                        Export as CSV
                    </h1>
                    <ImportSquare size="20" color="#003937B2"/>
            </div>


            <div className='flex px-3 py-2 gap-2 bg-light-green-100 rounded-md items-center'>
                    <p className='text-[#eeeeee] text-sm'>Add New Product</p>
                    <AddCircle size="24" color="#eeeeee" variant="TwoTone"/>
            </div>
        </div>
    </div>
  )
}

export default ProductFilters