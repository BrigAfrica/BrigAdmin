import { AddCircle, ImportSquare } from 'iconsax-react'
 

import ProductForm from './ProductForm'
import UploadProductPhoto from './UploadProductPhoto'





const ProductInfo = () => {
  return (
    <div className='rounded shadow-lg px-4 bg-white mt-5'>

        <div className='flex 
                        xs:max-lg:flex-col  
                        xs:max-lg:gap-y-8  
                        justify-between 
                        items-center'>
            <h3>Product Info</h3>
            
            <div className='flex gap-4 xs:max-lg:justify-between  xs:nax-lg:w-full'>
                    <EditDraftBtn/>
                    <SaveandPublishBtn/>
            </div>
        </div>

        <div className='flex flex-row   gap-6 2 my-8 xs:max-lg:flex-col'>
            <ProductForm/>
            <UploadProductPhoto/>
        </div>

    </div>
  )
}





export default ProductInfo





const SaveandPublishBtn = () => {

    return(


        <div className='flex 
                    px-3 py-2 gap-2
                    bg-light-green-100 
                    rounded-md
                    items-center'
        >
            <p className='text-[#eeeeee] text-sm'>Save and Publish</p>
            <AddCircle size="24" color="#eeeeee" variant="TwoTone"/>
    </div>
)}


const EditDraftBtn = () => (

    <div className={`border-[0.5px] 
    border-light-green-100 
bg-white
xs:max-md:w-30
flex gap-2 items-center 
p-3 rounded-md shadow-md`}
    >
            <h1 className='text-[#003937B2]
                font-normal xs:max-md:text-xs'
                >
                Edit Draft
            </h1>
            <ImportSquare size="20" color="#003937B2"/>
    </div>
 )
