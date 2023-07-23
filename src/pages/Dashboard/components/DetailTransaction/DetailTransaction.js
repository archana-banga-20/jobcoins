import React, {useState, useCallback} from 'react';

import Modal from '../Modal/Modal'
import DetailtransactionTable from './DetailtransactionTable';
import "./DetailTransaction.css"

const DetailTransaction = () => {
	const [showWidget, setShowWidget] = useState(false);

	const handleWidget = useCallback(() => {
		setShowWidget((prevState) => !prevState)
	}, [])

	return(
			<div className='detailTransaction'>
				<p onClick={handleWidget}>Show Detail History</p>
				{showWidget && 
					<Modal closeModal={handleWidget} customClass="detailTransactionTable">
						<DetailtransactionTable/>
					</Modal>}
			</div>
	)
}

export default DetailTransaction