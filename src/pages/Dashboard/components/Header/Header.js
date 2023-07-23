import React from 'react';
import { useDispatch } from 'react-redux';

import "./Header.css"
import {logOutAction} from '../../../../redux/actions/transactionActions'

const Header = ({address}) => {
	const dispatch = useDispatch()

	const onLogOut = () => {
		dispatch(logOutAction())
	}

	return(
		<div className='header'>
			<p className='leftHeader'>Welcome {address}</p>
			<p onClick={onLogOut}>Sign Out</p>
	</div>
	)
}

export default Header