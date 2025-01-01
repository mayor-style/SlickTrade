import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const PieChart = ({ data, dataKey, nameKey, colors, outerRadius }) => {
  return (
    <ResponsiveContainer>
      <RechartsPieChart>
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          cx="50%"
          cy="50%"
          outerRadius={outerRadius || "80%"}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
