import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { DASHBOARD_CONSTANTS } from '../../../../AppConstant';

const BalanceChart = () => {

	const adddressData = useSelector((state) => state.adddressData || {});
	const {balanceDataSet  = []} = adddressData


  return (
		<div className='grid-item balanceChart'>
      <h2>{DASHBOARD_CONSTANTS.BALANCE_CHART_HEADING}</h2>
      <LineChart width={600} height={400} data={balanceDataSet} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
					<Line
					type="monotone"
					dataKey="balance"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
					/>
      </LineChart>
    </div>
  );
};

export default BalanceChart;

// {chartData.map(dataSet => (
// 	<Line key={dataSet.name} type="monotone" dataKey="value" data={dataSet.data} name={dataSet.name} stroke={dataSet.color} />
// ))}