import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { StaticImage } from "gatsby-plugin-image";
import { Row, Col } from "react-bootstrap";
import JotformEmbed from "react-jotform-embed";

const SideBar = ({ name, ...props }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant={props.variant} onClick={handleShow} className={props.classes} size={props.btnSize}>
				<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="star" />
				{props.btnTitle}
			</Button>
			<Offcanvas show={show} onHide={handleClose} placement={props.placement} backdrop="static">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Register</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<div className="register-card sidebar">
						<Row>
							<Col className="position-relative">
								<div className="frame-footer"></div>
								<JotformEmbed src="https://form.jotform.com/240461544692054" />
							</Col>
						</Row>
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default SideBar;
