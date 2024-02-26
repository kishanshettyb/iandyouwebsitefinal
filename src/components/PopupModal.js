import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
const PopupModal = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);

	const handleOpen = () => {
		const timer = setTimeout(() => {
			setShow(true);
		}, 10000);
		return () => clearTimeout(timer);
	};

	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	useEffect(() => {
		handleOpen();
	}, []);

	return (
		<>
			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} animation={true} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title className="text-center w-100" id="contained-modal-title-vcenter">
						Hold On!
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h5 className="text-center mt-3">Don't leave without a smile </h5>
					<p className="text-center mb-3">Talk to our experts and learn more about Eshwari Kriya</p>
					<div className="py-5 form-content">
						<Form noValidate validated={validated} onSubmit={handleSubmit}>
							<div className="px-5">
								<Row className="mb-4">
									<Form.Group as={Col} md="12" controlId="validationCustom01">
										<Form.Label>Full Name</Form.Label>
										<Form.Control size="lg" required type="text" placeholder="Full name" />
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Form.Group>
								</Row>
								<Row className="mb-4">
									<Form.Group as={Col} md="6" controlId="validationCustom03">
										<Form.Label>Email</Form.Label>
										<Form.Control size="lg" type="email" placeholder="Email" required />
										<Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
									</Form.Group>
									<Form.Group as={Col} md="6" controlId="validationCustom04">
										<Form.Label>Whatsapp No.</Form.Label>
										<Form.Control size="lg" type="text" placeholder="Whatsapp No." required />
										<Form.Control.Feedback type="invalid">Please provide a valid phone.</Form.Control.Feedback>
									</Form.Group>
								</Row>
							</div>
							<div className="text-center">
								<Button variant="dark" size="lg" className="px-5 mt-3 d-inline-flex align-items-center" type="submit">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="star" />
									Submit form
								</Button>
							</div>
						</Form>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default PopupModal;
