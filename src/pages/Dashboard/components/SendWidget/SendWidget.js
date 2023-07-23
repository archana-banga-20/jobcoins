import React, {useEffect, useState, useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import "./SendWidget.css";
import {handleTransaction} from '../../../../redux/actions/transactionActions'
import { DASHBOARD_CONSTANTS } from '../../../../AppConstant';

const SendWidget = ({closeModal}) => {
	const  dispatch= useDispatch()
	const addressData = useSelector((state) => state.adddressData || {});
	const transactionSuccess = useSelector((state) => state.transactionSuccess || false);
	const transactionfailure = useSelector((state) => state.transactionfailure || false);

	const [isError, setError] = useState('')
	const [sendAmount, setSendAmount] = useState(0)
	const [receipentAddress, setReceipentAddress] = useState('')
	const {coins} = addressData

	const isDisabled = useMemo(() => {
		return !(sendAmount && receipentAddress)
	}, [sendAmount, receipentAddress])

	useEffect(() => {
		if(transactionSuccess){
			setSendAmount(0);
			setReceipentAddress('')
			closeModal()
		}
	}, [transactionSuccess, closeModal])

	useEffect(() => {
		if(transactionfailure){
		
		}
	}, [transactionfailure])

	const updateAmount = (e) => {
		setSendAmount(e?.target?.value)
	}

	const updateAddress = (e) => {
		setReceipentAddress(e?.target?.value)
	}

	const onSend = () => {
		if(sendAmount > coins){
			setError(true)
		}
		dispatch(handleTransaction(receipentAddress,sendAmount ))
	}

	return(
		<div className='sendWidget'>
			<h2 className='heading'>{DASHBOARD_CONSTANTS.SEND_WIDGET_HEADING}</h2>
			<div className='inputWrap'>
				<div className='inputElements'>
					<p>{DASHBOARD_CONSTANTS.ADDRESS_HEADING}</p>
					<input value={receipentAddress} onChange={updateAddress}/>
				</div>

				<div className='inputElements'>
					<p>{DASHBOARD_CONSTANTS.AMOUNT_HEADING}</p>
					<input type="number" value={sendAmount} onChange={updateAmount}/>
				</div>
			</div>
			<div className='sendWrap'>
				<button disabled={isDisabled} onClick={onSend}>{DASHBOARD_CONSTANTS.SEND_BUTTON_TEXT}</button>
			</div>
			{isError && <p>{DASHBOARD_CONSTANTS.LOW_BALANCE_ERROR_MSG}</p>}
		</div>
		
	)
}

export default SendWidget