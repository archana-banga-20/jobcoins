import React from 'react';
import {  useSelector } from 'react-redux';

import "./DetailTransaction.css"

const DetailtransactionTable = () => {
	const addressData = useSelector((state) => state.adddressData || {});
	const {transactions = []} = addressData
	return(
		<div>
			<p>Transaction History</p>
			<table className='transactionTableWrap'>
      <thead>
        <tr>
          <th>Address</th>
          <th>Coins</th>
          <th>Action</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.address}</td>
            <td>{transaction.coins}</td>
            <td>{transaction.action}</td>
            <td>{transaction.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
		</div>
	)
}

export default DetailtransactionTable