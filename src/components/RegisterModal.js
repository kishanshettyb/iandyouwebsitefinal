import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
function RegisterModal(props) {
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
			<div className="">
				<Button variant="primary" size={props.size} className={props.classes} onClick={handleShow}>
					<StaticImage src="../images/icons/star-white.svg" className="me-2" alt="register" />
					{props.btnTitle}
				</Button>
			</div>

			<Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title className="fw-bold text-center ms-auto">Registration</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col xl={4} md={12} className="order-2 order-xl-1">
							<div className="program-info mt-5 mt-xl-0">
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

										<a rel="noreferrer" target="_blank" href="mailto:info@iandyou.org">
											info@iandyou.org
										</a>
									</li>
									<li>
										<StaticImage className="icon" src="../images/icons/phone.svg" alt="" />
										<a rel="noreferrer" target="_blank" href="tel:+91 9900022506">
											+91 9900022506
										</a>
									</li>
								</ul>
							</div>
						</Col>
						<Col xl={8} md={12} className="order-1 order-xl-2">
							<div className="payment-info ">
								<Form noValidate validated={validated} onSubmit={handleSubmit} className="position-relative">
									<Accordion defaultActiveKey="0">
										<Accordion.Item eventKey="0">
											<Accordion.Header>
												<p className="fw-bold text-primary mb-0">Personal Details</p>
											</Accordion.Header>
											<Accordion.Body>
												<Row className="mb-3">
													<Form.Group className="mb-2" as={Col} md="4" xs="6" controlId="validationCustom011">
														<Form.Label>
															Full Name<span className="text-danger">*</span>
														</Form.Label>
														<Form.Control required type="text" placeholder="Full name" />
														<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="3" xs="6" controlId="validationCustom022">
														<Form.Label>
															Email<span className="text-danger">*</span>
														</Form.Label>
														<Form.Control required type="email" placeholder="Email" />
														<Form.Control.Feedback>Enter valid email</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="3" xs="6" controlId="validationCustom033">
														<Form.Label>
															Phone<span className="text-danger">*</span>
														</Form.Label>
														<Form.Control required type="text" placeholder="Phone" />
														<Form.Control.Feedback>Enter valid phone</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="2" xs="6" controlId="validationCustom055">
														<Form.Label>
															Age<span className="text-danger">*</span>
														</Form.Label>
														<Form.Control required type="number" placeholder="Age" />
														<Form.Control.Feedback>Enter valid age</Form.Control.Feedback>
													</Form.Group>
												</Row>
												<Row className="mb-3">
													<Form.Group className="mb-2" as={Col} md="3" xs="3" controlId="validationCustom044">
														<Form.Label>
															DOB<span className="text-danger">*</span>
														</Form.Label>
														<Form.Control required type="text" placeholder="Date of birth" />
														<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="4" xs="3" controlId="validationCustom077">
														<Form.Label>
															Occupation<span className="text-danger">*</span>
														</Form.Label>
														<Form.Control required type="text" placeholder="Occupation" />
														<Form.Control.Feedback>Enter Occupation</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="5" xs="12" controlId="validationCustom066">
														<Form.Label>
															Gender<span className="text-danger">*</span>
														</Form.Label>
														<Form className="mt-2">
															{["radio"].map((type) => (
																<div key={`inline-${type}`} className="mb-3">
																	<Form.Check required inline label="Male" name="group1" type={type} id={`inline-${type}-1`} />
																	<Form.Check required inline label="Female" name="group1" type={type} id={`inline-${type}-2`} />
																	<Form.Check required inline label="Other" name="group1" type={type} id={`inline-${type}-3`} />
																</div>
															))}
														</Form>
													</Form.Group>
												</Row>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>
												<p className="fw-bold text-primary mb-0">Health Condition</p>
											</Accordion.Header>
											<Accordion.Body>
												<Row className="mb-3">
													<Form.Group className="mb-2" as={Col} md="12" xs="12" controlId="validationCustom077">
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
													<Form.Group className="mb-2" as={Col} md="6" xs="12" controlId="validationCustom055">
														<Form.Label>Other</Form.Label>
														<Form.Control type="text" placeholder="Other" />
														<Form.Control.Feedback>Other</Form.Control.Feedback>
													</Form.Group>
												</Row>{" "}
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>
												<p className="fw-bold text-primary mb-0">Address (optional)</p>
											</Accordion.Header>
											<Accordion.Body>
												<Row className="mb-3">
													<Form.Group className="mb-2" as={Col} md="6" xs="6" controlId="validationCustom03">
														<Form.Label>City</Form.Label>
														<Form.Control type="text" placeholder="City" />
														<Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="3" xs="6" controlId="validationCustom04">
														<Form.Label>State</Form.Label>
														<Form.Control type="text" placeholder="State" />
														<Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="3" xs="6" controlId="validationCustom05">
														<Form.Label>Zip</Form.Label>
														<Form.Control type="text" placeholder="Zip" />
														<Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
													</Form.Group>
												</Row>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
									<Form.Group className="mb-3 mt-3" xs="6">
										<Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
									</Form.Group>
									<div className="modal-fixed-footer my-4">
										<Button variant="primary" className="px-5 d-flex align-items-center" size="lg" type="submit">
											<StaticImage src="../images/icons/star-white.svg" className="me-2" alt="register" />
											Register
										</Button>
									</div>
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
