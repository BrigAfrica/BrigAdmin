/* eslint-disable react/prop-types */
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [

    {
        greenCurveGradient: "linear-gradient(180deg, rgba(30, 181, 100, 0.08) 0%, rgba(30, 181, 100, 0.00) 100%)"
    },
  {
    name: 'Page A',
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 3000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ParabolaCharts = ({curveStroke,curveFill}) => {
  return (
   
            <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" hide />
          <YAxis hide/>
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke={curveStroke} strokeWidth = {2} 
          fill= {curveFill}
          />
        </AreaChart>
      </ResponsiveContainer>


  )
}

export default ParabolaCharts