import { ArrowDown2, BagTick2, Shop } from 'iconsax-react'
 

const ProductCards = () => {
    return (
        <div className='flex mt-5 gap-4  xs:max-md:flex-col'>
    
    
                <div id="card1" className='shadow-lg rounded-md w-1/3 px-4 py-3 bg-white xs:max-md:w-full'>
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
                                    <p className='text-sm text-[#8B8D97]'>Total Product</p>
                                    <p>600.00</p>
                            </div>
                            <div>
                                    <p className='text-sm text-[#8B8D97]'>Brands</p>
                                    <p>10</p>
                            </div>
                            <div>
                                    <p className='text-sm text-[#8B8D97]'>Device Type</p>
                                        <p>6</p>
                            </div>
                        </div>
                </div>
    
    
    
    
                <div id="card2" className='w-1/3 xs:max-md:w-full shadow-lg rounded-md px-4 py-3 bg-white '>
    
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
                                    <p className='text-sm text-[#8B8D97]'>Stock</p>
                                    <p>55000</p>
                            </div>
                            <div>
                                    <p className='text-sm text-[#8B8D97]'>Low Stock</p>
                                    <p>6</p>
                            </div>
                            <div>
                                    <p className='text-sm text-[#8B8D97]'>Out of Stock</p>
                                        <p>0</p>
                            </div>
                            
                        </div>
                </div>
    
    
                <div id="card3" className='w-1/3 xs:max-md:w-full shadow-lg rounded-md px-4 py-3 bg-white '>
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
                                    <p className='text-sm text-[#8B8D97]'>Awaiting Restock</p>
                                    <p>30</p>
                            </div>
                            <div>
                                    <p className='text-sm text-[#8B8D97]'>Newly Added</p>
                                    <p>60</p>
                            </div>
                            <div>
                                    <p className='text-sm text-[#8B8D97]'>Discount</p>
                                        <p>0</p>
                            </div>
                        </div>
    
                </div>
    
    
    
        </div>
      )
}

export default ProductCards