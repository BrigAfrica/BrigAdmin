import { ArrowDown2, BagTick2, Shop } from 'iconsax-react'
 

const PersonalActivityCards = () => {
  return (
    <div className='flex mt-5 gap-4'>


            <div id="card1" className='shadow-lg rounded-md w-1/3 px-4 py-3 bg-white '>
                    <div className='flex justify-between mb-11'>
                        <Shop size="24" color="#003937" variant="TwoTone"/>
                        <div className='flex gap-[6px] border border-[#0C837E]
                         bg-[#EEFAF9] items-center
                            rounded-md px-2 py-1'>
                            <p className='font-light '>This Month</p>
                            <ArrowDown2 size={16}/>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div>
                                <p className='text-sm text-[#8B8D97]'>Total Orders</p>
                                <p>10</p>
                        </div>
                        <div>
                                <p className='text-sm text-[#8B8D97]'>Completed</p>
                                <p>6</p>
                        </div>
                        <div>
                                <p className='text-sm text-[#8B8D97]'>Pending</p>
                                    <p>4</p>
                        </div>
                    </div>
            </div>




            <div id="card2" className='w-1/3 shadow-lg rounded-md px-4 py-3 bg-white '>

                    <div className='flex justify-between mb-11'>
                        <BagTick2 size="24" color="#003937" variant="TwoTone"/>
                        <div className='flex gap-[6px] border border-[#0C837E]
                         bg-[#EEFAF9] items-center
                            rounded-md px-2 py-1'>
                            <p className='font-light '>This Month</p>
                            <ArrowDown2 size={16}/>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div>
                                <p className='text-sm text-[#8B8D97]'>Buy</p>
                                <p>10</p>
                        </div>
                        <div>
                                <p className='text-sm text-[#8B8D97]'>Swap</p>
                                <p>6</p>
                        </div>
                        <div>
                                <p className='text-sm text-[#8B8D97]'>Sell</p>
                                    <p>6</p>
                        </div>
                        <div>
                                <p className='text-sm text-[#8B8D97]'>Repair</p>
                                    <p>0</p>
                        </div>
                    </div>
            </div>


            <div id="card3" className='w-1/3 shadow-lg rounded-md px-4 py-3 bg-white '>
                    <div className='flex justify-between mb-11'>
                        <Shop size="24" color="#003937" variant="TwoTone"/>
                        <div className='flex gap-[6px] border border-[#0C837E]
                         bg-[#EEFAF9] items-center
                            rounded-md px-2 py-1'>
                            <p className='font-light '>This Month</p>
                            <ArrowDown2 size={16}/>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div>
                                <p className='text-sm text-[#8B8D97]'>Cancelled</p>
                                <p>0</p>
                        </div>
                        <div>
                                <p className='text-sm text-[#8B8D97]'>Vouchers</p>
                                <p>6</p>
                        </div>
                        <div>
                                <p className='text-sm text-[#8B8D97]'>Discount</p>
                                    <p>3</p>
                        </div>
                    </div>

            </div>



    </div>
  )
}

export default PersonalActivityCards