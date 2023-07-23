import React from 'react';
import {  useSelector } from 'react-redux';

import "./BalanceWidget.css";
import DetailTransaction from '../DetailTransaction/DetailTransaction';

const BalanceWidget = () => {
	const addressData = useSelector((state) => state.adddressData || {});
	const {coins} = addressData;

	return(
			<div className='balanceWidget'>
				<p>Balance {coins} coins</p>
				<DetailTransaction/>
			</div>
	)
}

export default BalanceWidget