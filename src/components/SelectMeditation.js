import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import RegisterModal from "./RegisterModal";

const SelectMeditation = (props) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<div>
				<Button variant={props.variant} size={props.size} className={props.classes} onClick={handleShow}>
					<StaticImage src="../images/icons/star-white.svg" className="me-2" alt="register" />
					{props.btnTitle}
				</Button>
			</div>

			<Modal centered show={show} onHide={handleClose} animation={false} size="xl">
				<Modal.Header closeButton>
					<Modal.Title className="fw-bold  text-center text-primary w-100 ms-auto">Select Program</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="m-4">
						<Row className="select-meditation-programs">
							<Col xs={6} lg={4} xl={3}>
								<div className="meditation-card">
									<div className="image">
										<StaticImage className="icon" src="../images/bg/meditation/beginer.svg" alt="Beginer" />
									</div>
									<div className="content">
										<h4 className="fw-bold">Beginer</h4>
										<p>
											Embark on Your <br />
											Meditation Journey
										</p>
									</div>
									<div>
										<RegisterModal btnTitle="Register" variant="primary" size="md" classes="d-flex align-items-center px-4 mb-4" courseName="Beginner Meditation Course" />
									</div>
								</div>
							</Col>
							<Col xs={6} lg={4} xl={3}>
								<div className="meditation-card">
									<div className="image">
										<StaticImage className="icon" src="../images/bg/meditation/advanced.jpeg" alt="Beginer" />
									</div>
									<div className="content">
										<h4 className="fw-bold">Advanced</h4>
										<p>
											Embark on Your Meditation <br /> Journey
										</p>
									</div>
									<div>
										<RegisterModal btnTitle="Register" variant="primary" size="md" classes="d-flex align-items-center px-4 mb-4" courseName="Advanced Meditation Course" />
									</div>
								</div>
							</Col>
							<Col xs={6} lg={4} xl={3}>
								<div className="meditation-card">
									<div className="image">
										<StaticImage className="icon" src="../images/bg/meditation/relax.jpeg" alt="Beginer" />
									</div>
									<div className="content">
										<h4 className="fw-bold">Relaxations</h4>
										<p>Unwind and De-stress: Relaxation through Meditation</p>
									</div>
									<div>
										<RegisterModal btnTitle="Register" variant="primary" size="md" classes="d-flex align-items-center px-4 mb-4" courseName="Relaxations Meditation Course" />
									</div>
								</div>
							</Col>
							<Col xs={6} lg={4} xl={3}>
								<div className="meditation-card">
									<div className="image">
										<StaticImage className="icon" src="../images/bg/meditation/children.jpg" alt="Beginer" />
									</div>
									<div className="content">
										<h4 className="fw-bold">Childrens</h4>
										<p>Mindfulness for Young Minds: Fun Meditation Practices</p>
									</div>
									<div>
										<RegisterModal btnTitle="Register" variant="primary" size="md" classes="d-flex align-items-center px-4 mb-4" courseName="Childrens Meditation Course" />
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default SelectMeditation;
