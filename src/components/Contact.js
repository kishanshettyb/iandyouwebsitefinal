import React, { useState, useRef } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import swal from "sweetalert";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const forms = useRef();
	const [validated, setValidated] = useState(false);

	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [whatsapp, setWhatsapp] = useState("");
	const [message, setMessage] = useState("");

	const postdata = JSON.stringify({
		data: {
			fullname: fullname,
			email: email,
			whatsapp: whatsapp,
			message: message
		}
	});

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		const sendEmail = () => {
			emailjs
				.sendForm("service_p2dae6a", "template_cp2u73m", forms.current, {
					publicKey: "1BF5Wbj46kYxPmUPe"
				})
				.then(
					() => {
						console.log("SUCCESS!");
					},
					(error) => {
						console.log("FAILED...", error.text);
					}
				);
		};

		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
		if (!fullname || !email || !whatsapp) {
			console.log("Input cannot be empty");
		} else {
			setValidated(true);
			fetch("https://iandyouwebsitebackend.onrender.com/api/contacts", {
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
						sendEmail();
						swal({
							title: "Thank you!",
							text: "Thank you for reaching out to us. We truly appreciate your interest and taking the time to contact us.",
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
			<Form ref={forms} noValidate validated={validated} className="pt-3">
				<div>
					<Row className="mb-4">
						<Form.Group as={Col} md="12" controlId="validationCustom01">
							<Form.Label>
								Full Name<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control value={fullname} onChange={(e) => setFullname(e.target.value)} size="lg" required type="text" placeholder="Full name" />
							<Form.Control.Feedback type="invalid">Please enter full name</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row className="mb-4">
						<Form.Group as={Col} md="6" controlId="validationCustom03">
							<Form.Label>
								Email<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control value={email} onChange={(e) => setEmail(e.target.value)} size="lg" type="email" placeholder="Email" required />
							<Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="6" controlId="validationCustom04">
							<Form.Label>
								Whatsapp No.<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} size="lg" type="number" placeholder="Whatsapp No." required />
							<Form.Control.Feedback type="invalid">Please provide a valid phone.</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row className="mb-4">
						<Form.Group as={Col} md="12" controlId="validationCustom04">
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" style={{ height: "130px" }} />
						</Form.Group>
					</Row>
				</div>
				<div className="text-center">
					<Button variant="dark" size="lg" className="px-5 mt-3 d-inline-flex align-items-center" onClick={handleSubmit}>
						<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="star" />
						Submit form
					</Button>
				</div>
			</Form>
		</>
	);
};

export default Contact;
