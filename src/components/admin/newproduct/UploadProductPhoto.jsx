import toggleOn from './../../../assets/icons/toggleOn.svg'
import toggleOff from './../../../assets/icons/toggleOff.svg'
import { Gallery, GalleryAdd } from 'iconsax-react'
import  { useState } from 'react'
import Selectdropdown from '../../forms/Selectdropdown'

import InputField from '../../forms/InputField'



const percentOptions = ["5%","10%","15%","20%","25%","50%","75%"]
const UploadProductPhoto = () => {

    const[payments, setPayments] = useState({
            insurance: false,
            discount: false,
            expiryDate: false
    })

    console.log(payments)
  return (
    <div className='w-5/12 xs:max-lg:w-full '>
            <div id="box" className='rounded-md shadow-sm
             bg-[#FAFAFA] px-6 py-8 '>

                    <h2 className='text-light-gray-200'>Add Image</h2>


                    <div className='flex gap-4 justify-center py-10'>
                        <ImageSkeleton/>
                        <ImageSkeleton/>
                        <ImageSkeleton/>
                        
                    </div>

                    <div className='text-center'>
                        <h1 className='flex gap-3 text-light-green-100 justify-center mb-3'>
                            <Gallery/>
                            Upload Image
                        </h1>

                        <p className=''>Upload a cover image for your product.</p>
                        <small>File Format jpeg, png recommended Size 500x500 (1:1)</small>
                    </div>
            </div>



            <div className='flex flex-col gap-y-8  mt-7'>
                <div className='flex justify-between items-center'>
                    <p className= 'text-lg text-light-gray-200'>Insurance</p>
                    <div onClick={() => setPayments({...payments,insurance : !payments.insurance} )}>

                        {
                         
                            payments.insurance ?
                            <img src={toggleOn} alt="" />:
                            <img src={toggleOff} alt="" />
                        }
                    </div>
                   
                </div>
                <div className='flex justify-between items-center'>
                    <p className= 'text-lg text-light-gray-200'>Discount</p>
                    <div onClick={() => setPayments({...payments,discount : !payments.discount} )}>

                        {
                            payments.discount ?
                            <img src={toggleOn} alt="" />:
                            <img src={toggleOff} alt="" />
                        }
                    </div>
                    
                </div>

                {
                        payments.discount &&
                    <div className='flex justify-between items-center'>
                    
                    <p className= 'text-lg text-light-gray-200'>Percentage</p>
                    <Selectdropdown
                    height = {"h-12"}
                    width = {"w-24"}
                    bgColor={"bg-[#FAFAFA]"}
                    border = {"border border-[#DBDADE]"}
                    options={percentOptions}
                    />
                </div>
                }
                <div className='flex justify-between items-center'>
                    <p className= 'text-lg text-light-gray-200'>Expiry Date</p>
                    <div onClick={() => setPayments({...payments, expiryDate : !payments.expiryDate} )}>

                            {
                                payments.expiryDate ?
                                <img src={toggleOn} alt="" />:
                                <img src={toggleOff} alt="" />
                            }
</div>
        
                </div>

                <div>
                    <p className= 'text-lg text-light-gray-200'>Post Day</p>
                    <div className='flex gap-2 my-4 mx-3'>
                        <InputField
                            inputType={"date"}
                            
                            />
                            <InputField
                            inputType={"time"}
                            placeholder={"12:00"}
                            />
                    </div>
                </div>
            </div>
    </div>
  )
}


const ImageSkeleton = () => {
    return(
            <div className='flex justify-center items-center rounded-md bg-[#EFEFEF] border border-[#DBDADE] 
            w-28 h-44'>

                <GalleryAdd  color='gray'/>

            </div>
    )
}

export default UploadProductPhoto