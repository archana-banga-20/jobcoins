import React, { useRef} from 'react';
import "./Modal.css"

const Modal = ({closeModal, children, customClass}) => {

	const nodeRef = useRef()

	return(
		<div className='modal' ref={nodeRef}>
			<div className='modalWrap'>
				<p class="close" onClick={closeModal}/>
				<div className={`modalContent ${customClass}`}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Modal