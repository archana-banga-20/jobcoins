import { ACTION_CONSTANTS} from '../../AppConstant'


const INITIAL_STATE = {
	loginSuccess : false,
	loginFailure : false,
	adddressData: {},
	transactionSuccess: false,
	transactionfailure: false
};

const transactionReducer =  (state = INITIAL_STATE, action) => {
	if (!action) {
		return state;
	}
	const { type, payload = {} } = action;
	switch (type) {
		case ACTION_CONSTANTS.LOGIN_SUCCESS: {
			return {
				...state,
				loginSuccess : true
			};
		}
		case ACTION_CONSTANTS.LOGIN_FAILURE: {
			return {
				...state,
				loginFailure : true
			};
		}
		case ACTION_CONSTANTS.SET_ADDRESS_DETAILS: {
			return {
				...state,
				adddressData: payload
			};
		}
		case ACTION_CONSTANTS.SET_TRANSACTION_SUCCESS: {
			return {
				...state,
				transactionSuccess: true
			};
		}
		case ACTION_CONSTANTS.SET_TRANSACTION_ERROR: {
			return {
				...state,
				transactionfailure: true
			};
		}
		default: {
			return state;
		}
	}
};

export default transactionReducer;
