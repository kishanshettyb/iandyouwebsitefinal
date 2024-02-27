import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Button, Row, Col, Modal, Form, InputGroup } from "react-bootstrap";

function RegisterModal() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Registration
			</Button>

			<Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title className="fw-bold text-center ms-auto">Registration</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col md={4}>
							<div className="program-info">
								<ul>
									<li>
										<StaticImage className="icon" src="../images/icons/sunset.svg" alt="" />
										Program Name
									</li>
									<li>
										<StaticImage className="icon" src="../images/icons/clock.svg" alt="" />
									</li>
									<li>
										<StaticImage className="icon" src="../images/icons/calendar.svg" alt="" />
									</li>
									<li>
										<StaticImage className="icon" src="../images/icons/video.svg" alt="" />
									</li>
									<li>
										<StaticImage className="icon" src="../images/icons/map-pin.svg" alt="" />
									</li>
									<li>
										<StaticImage className="icon" src="../images/icons/mail.svg" alt="" />

										<a target="_blank" href="mailto:info@iandyou.org">
											info@iandyou.org
										</a>
									</li>
									<li>
										<StaticImage className="icon" src="../images/icons/phone.svg" alt="" />
										<a target="_blank" href="tel:+91 9900022506">
											+91 9900022506
										</a>
									</li>
								</ul>
							</div>
						</Col>
						<Col md={8}>
							<div className="payment-info">
								<Form noValidate validated={validated} onSubmit={handleSubmit}>
									<p className="fw-bold">Personal Details</p>
									<Row className="mb-3">
										<Form.Group as={Col} md="4" controlId="validationCustom011">
											<Form.Label>
												Full Name<span className="text-danger">*</span>
											</Form.Label>
											<Form.Control required type="text" placeholder="Full name" />
											<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
										</Form.Group>
										<Form.Group as={Col} md="4" controlId="validationCustom022">
											<Form.Label>
												Email<span className="text-danger">*</span>
											</Form.Label>
											<Form.Control required type="email" placeholder="Email" />
											<Form.Control.Feedback>Enter valid email</Form.Control.Feedback>
										</Form.Group>
										<Form.Group as={Col} md="4" controlId="validationCustom033">
											<Form.Label>
												Phone<span className="text-danger">*</span>
											</Form.Label>
											<Form.Control required type="text" placeholder="Phone" />
											<Form.Control.Feedback>Enter valid phone</Form.Control.Feedback>
										</Form.Group>
									</Row>
									<Row className="mb-3">
										<Form.Group as={Col} md="3" controlId="validationCustom077">
											<Form.Label>
												Occupation<span className="text-danger">*</span>
											</Form.Label>
											<Form.Control required type="text" placeholder="Occupation" />
											<Form.Control.Feedback>Enter valid age</Form.Control.Feedback>
										</Form.Group>
										<Form.Group as={Col} md="3" controlId="validationCustom044">
											<Form.Label>
												DOB<span className="text-danger">*</span>
											</Form.Label>
											<Form.Control required type="text" placeholder="Date of birth" />
											<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
										</Form.Group>
										<Form.Group as={Col} md="3" controlId="validationCustom055">
											<Form.Label>
												Age<span className="text-danger">*</span>
											</Form.Label>
											<Form.Control required type="number" placeholder="Age" />
											<Form.Control.Feedback>Enter valid age</Form.Control.Feedback>
										</Form.Group>

										<Form.Group as={Col} md="3" controlId="validationCustom066">
											<Form.Label>
												Gender<span className="text-danger">*</span>
											</Form.Label>
											<Form>
												{["radio"].map((type) => (
													<div key={`inline-${type}`} className="mb-3">
														<Form.Check required inline label="1" name="group1" type={type} id={`inline-${type}-1`} />
														<Form.Check required inline label="2" name="group1" type={type} id={`inline-${type}-2`} />
														<Form.Check required inline label="3" name="group1" type={type} id={`inline-${type}-3`} />
													</div>
												))}
											</Form>
										</Form.Group>
									</Row>
									<Row className="mb-3">
										<p className="fw-bold">Health Condition</p>
										<Form.Group as={Col} md="12" controlId="validationCustom077">
											<Form>
												{["checkbox"].map((type) => (
													<div key={`inline-${type}`} className="mb-3">
														<Form.Check inline name="1" label="High B.P." type={type} id={`inline-${type}-1`} />
														<Form.Check inline name="2" label="Pregnancy" type={type} id={`inline-${type}-2`} />
														<Form.Check inline name="3" label="Heart Problems" type={type} id={`inline-${type}-3`} />
														<Form.Check inline name="4" label="Epilepsy/Bipolar/Schizophrenia" type={type} id={`inline-${type}-4`} />
													</div>
												))}
											</Form>
										</Form.Group>
										<Form.Group as={Col} md="6" controlId="validationCustom055">
											<Form.Label>Other</Form.Label>
											<Form.Control required type="text" placeholder="Other" />
											<Form.Control.Feedback>Other</Form.Control.Feedback>
										</Form.Group>
									</Row>
									<Row className="mb-3">
										<p className="fw-bold">Address (optional)</p>
										<Form.Group as={Col} md="6" controlId="validationCustom03">
											<Form.Label>City</Form.Label>
											<Form.Control type="text" placeholder="City" required />
											<Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
										</Form.Group>
										<Form.Group as={Col} md="3" controlId="validationCustom04">
											<Form.Label>State</Form.Label>
											<Form.Control type="text" placeholder="State" required />
											<Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
										</Form.Group>
										<Form.Group as={Col} md="3" controlId="validationCustom05">
											<Form.Label>Zip</Form.Label>
											<Form.Control type="text" placeholder="Zip" required />
											<Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
										</Form.Group>
									</Row>
									<Form.Group className="mb-3">
										<Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
									</Form.Group>
									<Button type="submit">Submit form</Button>
								</Form>
							</div>
						</Col>
					</Row>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default RegisterModal;
