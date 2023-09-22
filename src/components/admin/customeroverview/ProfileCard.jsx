import { Profile } from 'iconsax-react'
 

const ProfileCard = () => {
  return (
    <div className='flex  lg:flex-row shadow-lg rounded-md  divide-x-2 p-4 bg-white mt-8'>
            <div className='w-5/12 flex gap-6'>

                <div className='w-1/12 flex justify-center items-center'>

                    <div className='w-12 h-12  rounded-full flex justify-center items-center bg-[#F1FEF1]'>

                        <Profile size="24" color="#28928c" variant="TwoTone"/>
                    </div>
                </div>


                <div className='w-10/12 flex flex-col gap-y-5'>
                        <div>
                            <h3>Akachukwu James</h3>
                            <small>Last Order 12 Sept 2022</small>
                        </div>
                        <div className='flex flex-col xl:flex-row gap-10 '>
                            <div className=''>
                                <p className='text-[#8B8D97]'>Phone</p>
                                <p className="font-bold">+2348065650633</p>
                            </div>
                            <div>
                                <p className='text-[#8B8D97]'>Email</p>
                                <p className="font-bold">akachukwujames45@gmail.com</p>
                            </div>
                        </div>
                </div>
            </div>


            <div className='w-4/12 flex items-center flex-col'>
                <div className='mb-5 text-left '>
                    <small> Home Address</small>
                    <p className='text-sm font-bold'> No. 15 Adekunle Street, Yaba, Lagos State</p>
                </div>
                <div>
                    <small>Billing Address</small>
                    <p className='text-sm font-bold'> No. 15 Adekunle Street, Yaba, Lagos State</p>
                </div>
            </div>

            <div className='w-3/12 flex items-center flex-col gap-y-5'>
                <div>
                    <small>Created Date</small>
                    <p>19/06/23</p>
                </div>

                <div>
                    <small>User ID</small>
                    <p>ID45r4356</p>
                </div>
            </div>
    </div>
  )
}

export default ProfileCard