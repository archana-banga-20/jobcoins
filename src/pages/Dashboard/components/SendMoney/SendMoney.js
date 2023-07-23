import React, {useState, useCallback} from 'react';

import Modal from '../Modal/Modal'
import SendWidget from '../SendWidget/SendWidget';
import { DASHBOARD_CONSTANTS } from '../../../../AppConstant';

const Widgets = () => {
	const [showWidget, setShowWidget] = useState(false);

	const handleWidget = useCallback(() => {
		setShowWidget((prevState) => !prevState)
	}, [])

	return(
			<div className='sendMoneyWrap'>
				<div>
					<p className='sendMoney' onClick={handleWidget}>{DASHBOARD_CONSTANTS.SEND_WIDGET_HEADING}</p>
					{showWidget &&
						<Modal closeModal={handleWidget}>
							<SendWidget closeModal={handleWidget}/>
						</Modal>
						}
				</div>
			</div>
	)
}

export default Widgets