import {ACTION_CONSTANTS, APPLICATION_CONSTANTS} from '../../AppConstant';
import {setCookie, getCookie} from '../../Utility/CookieUtils'
import {transactionHandler, parseUserData,  logOut} from '../../Utility/Utils'

const getData = () => {
	const initialCoins = localStorage.getItem('initialCoins');
	return JSON.parse(initialCoins);
}

export const loginAction = (address) => (dispatch) => {
	const defaultData = getData()

	if(defaultData[address]){
		setCookie('address', address, '');
		dispatch({
			type: ACTION_CONSTANTS.LOGIN_SUCCESS
		})
	}
	else{
		dispatch({
			type: ACTION_CONSTANTS.LOGIN_FAILURE
		})
	}
};


export const logOutAction = () => () => {
	logOut();
	window.location.href = APPLICATION_CONSTANTS.HOME_PAGE_URL
};


export const getAddressDetails = (address) => (dispatch) =>{
	const defaultData = getData()
	const data = defaultData[address]
	if(data){
		const updateData = parseUserData(data)
		dispatch({
			type: ACTION_CONSTANTS.SET_ADDRESS_DETAILS,
			payload: updateData
		})
	}
}

export const handleTransaction = (receipentAddress, transacAmount) => (dispatch) => {
	const senderAddress = getCookie('address')
	const defaultData = getData()
	let sendersData = defaultData[senderAddress];
	const receipentData = defaultData[receipentAddress];
	if(!receipentData){
		dispatch({
			type: ACTION_CONSTANTS.SET_TRANSACTION_ERROR,
			payload: "Invalid Sender's Address"
		})
		return;
	}
	sendersData = transactionHandler(defaultData, senderAddress, sendersData, receipentAddress, receipentData, transacAmount);
	const updateData = parseUserData(sendersData)
	dispatch({
		type: ACTION_CONSTANTS.SET_ADDRESS_DETAILS,
		payload: updateData
	})
	dispatch({
		type: ACTION_CONSTANTS.SET_TRANSACTION_SUCCESS
	})

}