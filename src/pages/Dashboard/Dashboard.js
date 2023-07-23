import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';


import {getCookie} from '../../Utility/CookieUtils'
import {getAddressDetails} from '../../redux/actions/transactionActions'
import Header from './components/Header/Header'
import SendMoney from './components/SendMoney/SendMoney';
import TransactionChart from './components/TransactionHistory/TransactionChart';
import BalanceChart from './components/TransactionHistory/BalaneChart';
import BalanceWidget from './components/BalanceWidget/BalanceWidget';

import "./Style.css";
import { APPLICATION_CONSTANTS } from '../../AppConstant';

const DashBoard = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch()

	const addressData = useSelector((state) => state.adddressData || {});
	const { address} = addressData;

	useEffect(() => {
		const address = getCookie('address')
		if(address){
			dispatch(getAddressDetails(address))
		}
		else{
			navigate(APPLICATION_CONSTANTS.HOME_PAGE_URL)
		}
	}, [navigate, dispatch])

	return(
		<div>
			<Header address={address}/>
			<div className='appWrap grid-container'>
				<div className='grid-item'>
					<BalanceWidget/>
				</div>
				<div className='grid-item'>
					<SendMoney/>
				</div>
				<div className='grid-item'>
					<TransactionChart/>
				</div>
				<div className='grid-item'>
					<BalanceChart/>
				</div>
			</div>

		</div>
		
	)
}

export default DashBoard