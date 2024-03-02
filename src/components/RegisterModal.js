import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useRef } from "react";
import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { StaticQuery, graphql } from "gatsby";
import DatePicker from "react-datepicker";
import swal from "sweetalert";
import emailjs from "@emailjs/browser";

import "react-datepicker/dist/react-datepicker.css";
const RegisterModal = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [validated, setValidated] = useState(false);
	// Submit
	// Form start
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [age, setAge] = useState("");
	const [dob, setDob] = useState("");
	const [occupation, setOccupation] = useState("");
	const [gender, setGender] = useState("");
	const [other, setOther] = useState("");
	const [conditions, setConditions] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [pincode, setPincode] = useState("");
	const [terms, setTerms] = useState("");
	const forms = useRef();

	const handleSubmit = (event) => {
		const form = event.currentTarget;

		const postdata = JSON.stringify({
			data: {
				fullname: fullname,
				email: email,
				phone: phone,
				age: age,
				dob: dob,
				occupation: occupation,
				gender: gender,
				other: other,
				conditions: conditions,
				city: city,
				state: state,
				pincode: pincode,
				terms: terms
			}
		});

		// Send Email
		emailjs
			.sendForm("service_ciwemra", "template_7uiswwd", forms.current, {
				publicKey: "D--qqFa-LCO7RvmzS"
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
		// End Email

		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		// Check if the input value is not null or empty
		if (!fullname || !email || !phone || !age || !dob || !occupation || !gender || !terms) {
			console.log("Input cannot be empty");
		} else {
			setValidated(true);
			fetch("https://iandyouwebsitebackend.onrender.com/api/registrations", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: postdata
			})
				.then((res) => res.json())
				.then((res) => {
					if (res.data == null) {
						console.log("error");
					} else {
						setShow(false);
						swal({
							title: "Thank you!",
							text: "Thank you for Registering with us. We will contact you as soon as possible.",
							icon: "success",
							timer: 3000,
							buttons: false
						});
					}
				})
				.catch((error) => console.error(error));
		}
	};

	return (
		<>
			<div>
				<Button variant={props.variant} size={props.size} className={props.classes} onClick={handleShow}>
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
								<StaticQuery
									query={graphql`
										query {
											allStrapiCourse(filter: { id: { eq: "8ab1f383-b2eb-5fe0-a266-f3e56fab1429" } }) {
												edges {
													node {
														title
														desc
														time
														price
														mode
														address
														date
														id
														image {
															url
														}
													}
												}
											}
										}
									`}
									render={(data) => (
										<>
											{data.allStrapiCourse.edges.map(({ node }) => (
												<ul>
													<li>
														{node.image.map(({ url }) => (
															<img src={url} alt="program" className="reg-modal-image" />
														))}
													</li>
													<li>
														<StaticImage className="icon" src="../images/icons/sunset.svg" alt="" />
														{node.title}
													</li>
													<li>
														<StaticImage className="icon" src="../images/icons/calendar.svg" alt="" />
														{node.date}
													</li>
													<li>
														<StaticImage className="icon" src="../images/icons/clock.svg" alt="" />
														{node.time}
													</li>

													<li>
														<StaticImage className="icon" src="../images/icons/video.svg" alt="" />
														{node.mode}
													</li>
													<li>
														<StaticImage className="icon" src="../images/icons/map-pin.svg" alt="" />
														{node.address}
													</li>
													<li>
														<StaticImage className="icon" src="../images/icons/rupee.svg" alt="" />
														{node.price}
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
											))}
										</>
									)}
								/>
							</div>
						</Col>
						<Col xl={8} md={12} className="order-1 order-xl-2">
							<div className="payment-info ">
								<Form ref={forms} noValidate validated={validated} className="position-relative">
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
														<Form.Control required name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" placeholder="Full name" />
														<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="3" xs="6" controlId="validationCustom022">
														<Form.Label>
															Email<span className="text-danger">*</span>
														</Form.Label>
														<Form.Control required name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
														<Form.Control.Feedback>Enter valid email</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="3" xs="6" controlId="validationCustom033">
														<Form.Label>
															Phone<span className="text-danger">*</span>
														</Form.Label>
														<Form.Control required name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" />
														<Form.Control.Feedback>Enter valid phone</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="2" xs="6" controlId="validationCustom055">
														<Form.Label>
															Age<span className="text-danger">*</span>
														</Form.Label>
														<Form.Control required value={age} name="age" onChange={(e) => setAge(e.target.value)} type="number" placeholder="Age" />
														<Form.Control.Feedback>Enter valid age</Form.Control.Feedback>
													</Form.Group>
												</Row>
												<Row className="mb-3">
													<Form.Group className="mb-2" as={Col} md="3" xs="3" controlId="validationCustom044">
														<Form.Label>
															DOB<span className="text-danger">*</span>
														</Form.Label>

														<DatePicker required className="form-control" selected={dob} onChange={(e) => setDob(e)} dateFormat="yyyy-mm-dd" placeholder="dob" />

														<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="4" xs="3" controlId="validationCustom077">
														<Form.Label>
															Occupation<span className="text-danger">*</span>
														</Form.Label>
														<Form.Control required name="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} type="text" placeholder="Occupation" />
														<Form.Control.Feedback>Enter Occupation</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="5" xs="12" controlId="validationCustom066">
														<Form.Label>
															Gender<span className="text-danger">*</span>
														</Form.Label>
														<Form className="mt-2">
															{["radio"].map((type) => (
																<div key={`inline-${type}`} className="mb-3">
																	<Form.Check
																		required
																		value="Male"
																		onChange={(e) => setGender(e.target.value)}
																		inline
																		label="Male"
																		name="gender"
																		type={type}
																		id={`inline-${type}-1`}
																	/>
																	<Form.Check
																		required
																		value="Female"
																		onChange={(e) => setGender(e.target.value)}
																		inline
																		label="Female"
																		name="gender"
																		type={type}
																		id={`inline-${type}-2`}
																	/>
																	<Form.Check
																		required
																		value="Other"
																		onChange={(e) => setGender(e.target.value)}
																		inline
																		label="Other"
																		name="gender"
																		type={type}
																		id={`inline-${type}-3`}
																	/>
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
																	<Form.Check
																		inline
																		name="conditions"
																		value="High B.P."
																		onChange={(e) => setConditions(e.target.value)}
																		label="High B.P."
																		type={type}
																		id={`inline-${type}-11`}
																	/>
																	<Form.Check
																		inline
																		name="conditions"
																		value="Pregnancy"
																		onChange={(e) => setConditions(e.target.value)}
																		label="Pregnancy"
																		type={type}
																		id={`inline-${type}-22`}
																	/>
																	<Form.Check
																		inline
																		name="conditions"
																		value="Heart Problems"
																		onChange={(e) => setConditions(e.target.value)}
																		label="Heart Problems"
																		type={type}
																		id={`inline-${type}-33`}
																	/>
																	<Form.Check
																		inline
																		name="conditions"
																		value="Epilepsy/Bipolar/Schizophrenia"
																		onChange={(e) => setConditions(e.target.value)}
																		label="Epilepsy/Bipolar/Schizophrenia"
																		type={type}
																		id={`inline-${type}-44`}
																	/>
																</div>
															))}
														</Form>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="6" xs="12" controlId="validationCustom055">
														<Form.Label>Other</Form.Label>
														<Form.Control type="text" name="other" value={other} onChange={(e) => setOther(e.target.value)} placeholder="Other" />
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
														<Form.Control type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
														<Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="3" xs="6" controlId="validationCustom04">
														<Form.Label>State</Form.Label>
														<Form.Control type="text" name="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" />
														<Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="mb-2" as={Col} md="3" xs="6" controlId="validationCustom05">
														<Form.Label>Pincode</Form.Label>
														<Form.Control type="text" name="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Zip" />
														<Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
													</Form.Group>
												</Row>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
									<Form.Group className="mb-3 mt-3" xs="6">
										<Form.Check
											name="terms"
											value="accept"
											onChange={(e) => setTerms(e.target.value)}
											required
											label="Agree to terms and conditions"
											feedback="You must agree before submitting."
											feedbackType="invalid"
										/>
									</Form.Group>
									<div className="modal-fixed-footer my-4">
										<Button variant="primary" className="px-5 d-flex align-items-center" size="lg" onClick={handleSubmit}>
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
};

export default RegisterModal;
