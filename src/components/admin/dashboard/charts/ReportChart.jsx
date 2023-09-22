import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Tue",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 2750,
    amt: 2290
  },
  {
    name: "Wed",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Thur",
    uv: 1890,
    pv: 7500,
    amt: 2181
  },
  {
    name: "Fri",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Sat",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },

  {
    name: "Sun",
    uv: 3490,
    pv: 1300,
    amt: 2100
  }
];


const ReportChart = () => {
  return (


    <ResponsiveContainer width= "100%" height= "100%">

        <LineChart
      width={678}
      height={350}
      data={data}
      margin={{
        top: 20,
        right: 5,
        left:  5,
        bottom: 5
      }}
    >
      
      <YAxis type="number" style={{fontSize: 8}}/>
      <XAxis dataKey="name" type="category"  style={{fontSize: 8}}/>
      <Tooltip />
      <Legend />
      <Line dataKey="pv" stroke="#0C837E"  strokeWidth= {4}/>
    </LineChart>
    </ResponsiveContainer>
   
   
  )
}

export default ReportChart