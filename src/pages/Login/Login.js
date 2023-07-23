import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {loginAction} from '../../redux/actions/transactionActions';
import "./Login.css"
import { LOGIN_CONSTANTS } from '../../AppConstant';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch()

	const loginSuccess = useSelector((state) => state.loginSuccess || false);
	const loginFailure = useSelector((state) => state.loginFailure || false);
	const [address, setAddress] = useState('')
	const [isError, setError] = useState(false)

	useEffect(() => {
		if(loginSuccess){
			navigate("/dashboard")
		}
	}, [loginSuccess, navigate])

	useEffect(() => {
		setError(loginFailure)
	}, [loginFailure])

	const submitHandler = () => {
		dispatch(loginAction(address))
	}

	const inputHandler = (e) => {
		setError(false)
		setAddress(e?.target?.value)
	}
	return(
		<div className='login'>
				<input className='loginInput' placeholder={LOGIN_CONSTANTS.LOGIN_INPUT_PLACE_HOLDER} value={address} onChange={inputHandler}/>
				<button className='loginButton' onClick={submitHandler}>{LOGIN_CONSTANTS.LOGIN_BUTTON_TEXT}</button>
				{isError && <p className='error'>{LOGIN_CONSTANTS.INVALID_EMAIL_ERROR}</p>}
		</div>
	
	)
}

export default Login