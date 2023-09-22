 
import dotsVertical from '../../../assets/icons/dotsVertical.svg';
import ProductTables from './tables/ProductTables';
const IncomingOrder = () => {
  return (
    <div className='flex card_widgets flex-1 flex-col gap-y-4'>
        <header className='flex justify-between'>
            <h1>Incoming Orders</h1>
            <img src= {dotsVertical} alt="" />
        </header>


        <div id="table">
          <ProductTables/>
        </div>

    </div>
  )
}

export default IncomingOrder