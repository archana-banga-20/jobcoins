import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { DASHBOARD_CONSTANTS } from '../../../../AppConstant';

const TransactionChart = () => {

	const adddressData = useSelector((state) => state.adddressData || {});
	const {transactionDataSet  = []} = adddressData

  return (
		<div className='transactionChart'>
      <h2>{DASHBOARD_CONSTANTS.TRANSACTION_CHART_HEADING}</h2>
      <LineChart width={600} height={400} data={transactionDataSet} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
					<Line
					type="monotone"
					dataKey="sentMoney"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
					/>
				<Line type="monotone" dataKey="recieveMoney" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default TransactionChart;
