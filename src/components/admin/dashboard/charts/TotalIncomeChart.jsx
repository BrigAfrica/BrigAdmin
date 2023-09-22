
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Mon",
    cost: 4000,
    sales: 2400,
    amt: 2400
  },
  {
    name: "Tue",
    cost: 3000,
    sales: 1398,
    amt: 2210
  },
  {
    name: "Wed",
    cost: 2000,
    sales: 2750,
    amt: 2290
  },
  {
    name: "Thur",
    cost: 2780,
    sales: 3908,
    amt: 2000
  },
  {
    name: "Fri",
    cost: 1890,
    sales: 7500,
    amt: 2181
  },
  {
    name: "Sat",
    cost: 2390,
    sales: 3800,
    amt: 2500
  },
  {
    name: "Sun",
    cost: 3490,
    sales: 4300,
    amt: 2100
  }
];

const TotalIncomeChart = () => {
  return (
  

<ResponsiveContainer width= "100%" height="100%">
        <LineChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 5
          }}
          >
           <Legend verticalAlign="top" height={36}/>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis type="number" fontSize={8}/>
          <XAxis dataKey="name" type="category" fontSize={12}/>
          <Tooltip />
          <Legend />
          <Line dataKey="sales" stroke="#8884d8" strokeWidth={4}/>
          <Line dataKey="cost" stroke="#82ca9d" strokeWidth={4}/>
        </LineChart>

</ResponsiveContainer>
    
  )
}

export default TotalIncomeChart