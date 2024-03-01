import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";

const PopupModal = () => {
	// ------ Modal ------ //
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleOpen = () => {
		const timer = setTimeout(() => {
			setShow(true);
		}, 1000);
		return () => clearTimeout(timer);
	};
	// ------ Form Validation ------ //
	const [validated, setValidated] = useState(false);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [whatsapp, setWhatsapp] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	const [ip, setIP] = useState("");
	const getData = async () => {
		const res = await axios.get("https://api.ipify.org/?format=json");
		console.log(res.data);
		setIP(res.data.ip);
		localStorage.setItem("modalopened", JSON.stringify(res.data.ip));
	};

	function submit(e) {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
		}
		setValidated(true);
		fetch("https://formcarry.com/s/8s-dt6C--60", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({ name: name, email: email, whatsapp: whatsapp })
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.code === 200) {
					setSubmitted(true);
					setShow(false);
					swal({
						title: "Success",
						icon: "success"
					});
					getData();
				} else {
					setError(res.message);
					setShow(false);
					swal({
						icon: "error",
						title: "Something went wrong! Try after sometime"
					});
				}
			})
			.catch((error) => setError(error));
	}

	// ------ Use Effect ------ //
	useEffect(() => {
		const setIp = JSON.parse(localStorage.getItem("modalopened"));
		console.log(setIp);
		if (setIp == null) {
			handleOpen();
		}
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
						<Form noValidate validated={validated}>
							<div className="px-5">
								<Row className="mb-4">
									<Form.Group as={Col} md="12" controlId="validationCustom011">
										<Form.Label>
											Full Name<span className="text-danger">*</span>
										</Form.Label>
										<Form.Control name="name" value={name} onChange={(e) => setName(e.target.value)} size="lg" required type="text" placeholder="Full name" />
										<Form.Control.Feedback type="invalid">Please enter your name!</Form.Control.Feedback>
									</Form.Group>
								</Row>
								<Row className="mb-4">
									<Form.Group as={Col} md="6" controlId="validationCustom022">
										<Form.Label>
											Email<span className="text-danger">*</span>
										</Form.Label>
										<Form.Control name="email" value={email} onChange={(e) => setEmail(e.target.value)} size="lg" type="email" placeholder="Email" required />
										<Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
									</Form.Group>
									<Form.Group as={Col} md="6" controlId="validationCustom033">
										<Form.Label>
											Whatsapp No.<span className="text-danger">*</span>
										</Form.Label>
										<Form.Control name="whatsapp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} size="lg" type="text" placeholder="Whatsapp No." required />
										<Form.Control.Feedback type="invalid">Please provide a valid phone.</Form.Control.Feedback>
									</Form.Group>
								</Row>
							</div>
							<div className="text-center">
								<Button variant="dark" size="lg" className="px-5 mt-3 d-inline-flex align-items-center" onClick={submit}>
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
