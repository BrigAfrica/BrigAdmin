import dotsVertical from "../../../assets/icons/dotsVertical.svg"
import TopSellingPieCharts from "./charts/TopSellingPieCharts"

const TopSelling = () => {
  return (
    <div className="card_widgets xs:max-lg:w-full w-3/12 flex flex-col ">
        <header className="flex justify-between">
            <div>

                <h1 className="text-base leading-6">Top Selling Category</h1>
                <p className='text-light-gray-200'>Total 10.4k Visitors</p>

            </div>

            <img src={dotsVertical} alt="" />
        </header>

        <div id="charts" className="xs:max-lg:flex xs:max-lg:justify-center ">
          <TopSellingPieCharts/>
        </div>

    </div>
  )
}

export default TopSelling