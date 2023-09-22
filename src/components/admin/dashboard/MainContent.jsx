import DashboardNav from './DashboardNav'
import FilterSearchExport from './FilterSearchExport'
import LevelOneCharts from './LevelOneCharts'
import TotalIncome from './TotalIncome'
import TotalProfit from './TotalProfit'
import RegisteredUsers from './RegisteredUsers'
import Reports from './Reports'
import TopSelling from './TopSelling'
import ProductsBest from './ProductsBest'
import IncomingOrder from './IncomingOrder'
import TodayOrder from './TodayOrder'


const MainContent = () => {
  return (
    <div className='mx-0 w-full'>
        <DashboardNav title = "Dashboard"/>
        <FilterSearchExport type = "dashboard"/> 

        <section className=' flex flex-row xs:max-md:flex-col gap-4 justify-between w-full'>
            <LevelOneCharts
              title= "Total Orders"
              price = "25.7k"
              percentage= "6%"
              type = "increment"
              curveStroke= "#1EB564"
              curveFill="#F6FCF9"/>
            
            <LevelOneCharts
              title= "Visitors"
              price = "12k"
              percentage= "2%"
              type= "decrement"
              curveFill="#f3ebeb"
              curveStroke= "#D02626"
              />
            <LevelOneCharts
              title= "Customer Returns"
              price = "12k"
              percentage= "2%"
              type= "decrement"
              curveFill="#f4faff"
              curveStroke= "#149DFD"
            />
        </section>

        <section className='flex xs:flex-col  lg:flex-row sm:max-lg:gap-y-4 gap-3  mt-6  w-full'>
            <TotalIncome/>
            <TotalProfit/>
        </section>


        <section className="flex xs:flex-col lg:flex-row mt-6  gap-5 sm:max-lg:gap-y-4  w-full justify-around ">
          <RegisteredUsers/>
          <Reports/>
        </section>

        <section className='flex mt-6 gap-5 xs:max-lg:flex-col ' >
            <TopSelling/>
            <ProductsBest/>
        </section>


        <section className='flex mt-6 gap-5 xs:max-lg:flex-col '>
          <TodayOrder/>
          <IncomingOrder/>
        </section>
    </div>
  )
} 

export default MainContent