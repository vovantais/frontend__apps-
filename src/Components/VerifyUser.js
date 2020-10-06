import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';


function VerifyUser(modal) {
	const initialState = {
		emailAddress: '',
		accessKey: '',
	}
	const [verifyUser, setVerifyUser] = useState(initialState);
	const handleChangeUserInfo = (e) => {
		console.log(e.target.value);
		setVerifyUser({
			...verifyUser,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmitForm = (e) => {
		//todo : отпрака данных на сервер 
		e.preventDefault();
		setVerifyUser(initialState);
	}
	return (
		<Modal show={modal.showModal} onHide={modal.closeModal} style={{ marginTop: 20, }} >
			<Modal.Header closeButton>
				<Modal.Title>Verify email address</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmitForm}>
					<Form.Group controlId="formBasicEmailAddress">
						<Form.Label> <i className="far fa-envelope"></i> Enter your email address</Form.Label>
						<Form.Control type="email" name='emailAddress' placeholder="Enter email"
							onChange={handleChangeUserInfo} />
					</Form.Group>
					<Form.Group controlId="formBasicAccessKey">
						<Form.Label ><i className="fas fa-key"></i>Enter your access key that was sent to your email</Form.Label>
						<Form.Control type="password" name='accessKey' placeholder="Enter access key"
							onChange={handleChangeUserInfo} />
					</Form.Group>
					<div className="text-center" >
						<Button variant='primary' type='submit' name='btnAccessKey'
							style={{ width: 120 }}>Send key</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal >
	)
}

export default VerifyUser;