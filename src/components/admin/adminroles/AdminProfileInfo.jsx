/* eslint-disable react/prop-types */
import InputField from '../../forms/InputField'

const AdminProfileInfo = () => {
  return (
    <div className=' px-8 py-4 my-4 shadow-lg rounded-md bg-white'> 
            <h1>Manage Your Profile Information </h1>
            <hr />
            <div id="main" className='flex my-8'>
                    <div className='w-3/12'>
                        <div className='xs:max-md:h-20 
                                        xs:max-md:w-20 
                                        h-40 w-40 
                                        text-lg 
                                        rounded-full
                                        bg-light-gray-200 
                                        flex items-center  
                                        justify-center'
                                    >
                            <h1 className='text-3xl'>FE</h1> 
                            
                        </div>
                    </div>
                    <div className='w-9/12'>
                        <div id="info" className='flex 
                                                justify-between 
                                                items-center 
                                                flex-row
                                                mb-11'
                                            >
                            <h3>User Info</h3>
                            <AdminBtn text={"Edit Profile Information"}/>
                        </div>
                        <div id="name" className='xs:max-md:flex-col
                                                 flex flex-row gap-32 
                                                 xs:max-md:gap-y-8'
                        >
                            <div className='flex flex-col gap-y-3'>
                                <small className='font-bold text-base '>First Name</small>
                                <small className='text-base'>Francis</small>
                            </div>
                            <div  className='flex flex-col gap-y-3'> 
                                <small className='text-base font-bold'>Middle Name</small>
                                <small className='text-base'>Francis</small>
                            </div>
                            <div  className='flex flex-col gap-y-3'>
                                <small className='text-base font-bold'>Last Name</small>
                                <small className='text-base'>Enebeli</small>
                            </div>
                        </div>
                        <div id="details" className='xs:max-md:flex-col
                                                 flex flex-row gap-32 
                                                 mb-16 mt-9
                                                 xs:max-md:gap-y-6'
                                                >
                            <div  className='flex flex-col gap-y-3'>
                                <small className='text-base font-bold'>Email address</small>
                                <small className='text-base'>francisenebeli@gmail.com</small>
                            </div>

                            <div  className='flex flex-col gap-y-3'>
                                <small className='text-base font-bold'>Role</small>
                                <small className='text-base'>Operations Manager</small>
                            </div>
                        </div>


                        <div className='flex md:gap-32'>

                            <div  className='flex flex-col gap-y-3 mb-7'>

                                <small className='text-base font-bold'>Created By</small>
                                <small className='text-base'>Operations Manager</small>
                            </div>

                            <div  className='flex flex-col gap-y-3'>

                                <small className='text-base font-bold'>Created Date</small>
                                <small className='text-base '>13/09/1981</small>
                            </div>
                        </div>
                        <hr />
                        <div className='my-9'>
                            <h1>Update Your Account Password</h1>

                            <div className='flex xs:max-md:flex-col gap-6 my-7'>

                                <div className='w-1/3  xs:max-md:w-full' >
                                    <small className='font-bold text-sm'>Old Password</small>
                                    <InputField/>
                                </div>
                                <div className='w-1/3 xs:max-md:w-full'>
                                    <small  className='font-bold text-sm'>New Password</small>
                                    <InputField/>
                                </div>
                                <div className='w-1/3 xs:max-md:w-full'>
                                    <small className='font-bold text-sm'>Retype Password</small>
                                    <InputField/>
                                </div>
                            </div>


                            <div className='flex justify-end'>
                                <AdminBtn text={"Update Password"}/>
                            </div>
                        </div>
                    </div>
            </div>


    </div>
  )
}



const AdminBtn = ({text}) => {

    return(


        <div className='flex px-3 py-2 gap-2 bg-light-green-100 rounded-md items-center'>
            <p className='text-[#eeeeee] text-sm'>{text}</p>
         
    </div>
)}


export default AdminProfileInfo