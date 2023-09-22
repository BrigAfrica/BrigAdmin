import { useState } from 'react';
import { Close } from '@mui/icons-material';
import download from './../../../assets/icons/download.svg'





const PaymentModal = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    const handleModalClick = (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        closeModal();
      }
    }
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#32605E]/[0.8]  flex items-center justify-center z-50 modal-overlay"
          onClick={handleModalClick}
        >
          <div className="bg-white p-4 rounded flex flex-col gap-y-11 shadow-lg">
            
            <div className='flex justify-between'>
                <header>
                    <h1 className="text-bold">Receipt</h1>
                    <p className='text-xs'>View Payment receipt</p>
                </header>

                <Close onClick = {closeModal}/>
            </div>

            <div className='flex gap-10'>
                <div>
                    <p>Customer Name</p>
                    <p>Akachukwu James</p>
                </div>

                <div>
                    <p>Customer ID</p>
                    <p>#123</p>
                </div>

                <div>
                    <p>Service</p>
                    <p>Buy</p>
                </div>

                <div>
                    <p>Invoiced Amount</p>
                    <p>N350,000</p>
                </div>
            </div>


            <div className='flex gap-10'>
                <div>
                    <p>Paid Amount</p>
                    <p> N350,000</p>
                </div>

                <div>
                    <p>Payment Ref</p>
                    <p>ID45r4356</p>
                </div>

                <div>
                    <p>Bank Name</p>
                    <p>Sterling bank</p>
                </div>

                <div>
                    <p>Payment Date</p>
                    <p>12/05/23</p>
                </div>
            </div>


            <div className='flex md:gap-14'>
                    <div>
                        <h1>Payment Status</h1>
                        <div className='py-1 px-2 flex 
                                    gap-2 items-center 
                                    border border-[#BEF2B9]
                                    rounded-lg text-[#36743d]'>
                            <div className='w-3 h-3 bg-[#36743d] rounded-full'></div>
                            <p>Success</p>
                        </div>
                    </div>


                    <div className='flex gap-2 items-center'>
                        <img src= {download} alt="" />
                        <h1 className='font-bold underline text-base'>Download</h1>
                    </div>
                </div>
          </div>


        </div>
      )}
    </div>
  )
}

export default PaymentModal