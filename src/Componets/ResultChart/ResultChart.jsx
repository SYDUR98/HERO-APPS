import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


const ResultChart = ({ratings}) => {
  return (
    <div className='max-w-[1400px] h-[400px] mx-auto bg-[#D2D2D2] text-black pt-[20px]'>
        <ResponsiveContainer>
        <BarChart
          data={ratings}
          layout="vertical" 
          margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#FF8811" barSize={25} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultChart;








