import { Link } from "gatsby";
import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Form } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { StaticImage } from "gatsby-plugin-image";
import SideBar from "../components/SideBar";
import Topbar from "./Topbar";

const NavHeader = () => {
	return (
		<>
			<Topbar />
			<Navbar expand="lg" className="bg-primarylight d-none d-lg-block">
				<Container>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="m-auto w-50 justify-content-end my-2 my-lg-0 me-4" navbarScroll>
							<Link className="nav-link home  d-flex align-items-center text-uppercase" to="/">
								<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Home" />
								<span>Home</span>
							</Link>
							<NavDropdown title="Solutions For" id="navbarScrollingDropdown" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/stress/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Stress" />
									<span>Stress</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/depression/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Depression" />
									<span>Depression</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/sleep/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Sleep" />
									<span>Sleep</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/immunity/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Immunity" />
									<span>Immunity</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/weightloss/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Weight loss" />
									<span>Weight loss</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/pain/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Back pain" />
									<span>Back pain</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/relationship/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Relationship" />
									<span>Relationship</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/wellness/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Wellness" />
									<span>Wellness</span>
								</Link>
							</NavDropdown>
							<NavDropdown title="Meditation" id="navbarScrollingDropdown11" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Beginners" />
									<span>Beginners</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Advance" />
									<span>Advance</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Relaxations" />
									<span>Relaxations</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Childrens" />
									<span>Childrens</span>
								</Link>
							</NavDropdown>
							<NavDropdown title="Eshwari kriya" id="navbarScrollingDropdown22" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Physiology" />
									<span>Physiology</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Nervous system" />
									<span>Nervous system</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Hormones" />
									<span>Hormones</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Corporate kriya" />
									<span>Corporate kriya</span>
								</Link>
							</NavDropdown>
						</Nav>
						<Navbar.Brand href="/" className="d-flex align-items-center">
							<StaticImage src="../images/I & You logo.png" alt="I and You" className="logo" />
						</Navbar.Brand>
						<Nav className="m-auto w-50 justify-content-start  my-2 my-lg-0 ms-4" style={{ maxHeight: "700px" }} navbarScroll>
							<NavDropdown title="Projects" id="navbarScrollingDropdown33" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="star" />
									<span>I and you green</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="I and you Vidhya" />
									<span>I and you Vidhya</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Sri nada" />
									<span>Sri nada</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Sri Krishi" />
									<span>Sri Krishi</span>
								</Link>
							</NavDropdown>
							<Link className="nav-link d-flex align-items-center text-uppercase" to="/wisdom/">
								<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Wisdom" />
								<span>Wisdom</span>
							</Link>
							<NavDropdown title="About Us" id="navbarScrollingDropdown44" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Guruji" />
									<span>Guruji</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Organization" />
									<span>Organization</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Contact" />
									<span>Contact</span>
								</Link>
							</NavDropdown>
							<NavDropdown title="Social impact" id="navbarScrollingDropdown55" className="dropmenu d-none">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Educations" />
									<span>Educations</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Peace" />
									<span>Peace</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Environmental" />
									<span>Environmental</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Organic farming" />
									<span>Organic farming</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Disaster relief - I and you Seva" />
									<span>Disaster relief - I and you Seva</span>
								</Link>
							</NavDropdown>
						</Nav>
						<Form className="position-absolute right-10 d-none d-xxl-block">
							<SideBar btnTitle="Register" classes="px-xxl-4 d-flex align-items-center" iconColor="white" variant="primary" placement="end" btnSize="md" />
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* Mobile */}
			<Navbar expand="lg" className="bg-primarylight d-block d-lg-none mobile">
				<Container>
					<Navbar.Brand href="#">
						<StaticImage src="../images/I & You logo.png" alt="I and You" className="logo-small" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="me-auto navbarScroll my-2 my-lg-0" navbarScroll>
							<Link className="nav-link  d-flex align-items-center text-uppercase" to="/">
								<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Home" />
								<span>Home</span>
							</Link>
							<NavDropdown title="Solutions For" id="navbarScrollingDropdown" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/stress/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Stree" />
									<span>Stress</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/depression/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Depression" />
									<span>Depression</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/sleep/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Sleep" />
									<span>Sleep</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/immunity/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Immunity" />
									<span>Immunity</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/weightloss/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Weight loss" />
									<span>Weight loss</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/pain/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Back pain" />
									<span>Back pain</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/relationship/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Relationship" />
									<span>Relationship</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/wellness/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Wellness" />
									<span>Wellness</span>
								</Link>
							</NavDropdown>
							<NavDropdown title="Meditation" id="navbarScrollingDropdown1" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Beginners" />
									<span>Beginners</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Advance" />
									<span>Advance </span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Relaxations" />
									<span>Relaxations</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Childrens" />
									<span>Childrens</span>
								</Link>
							</NavDropdown>
							<NavDropdown title="Eshwari kriya" id="navbarScrollingDropdown2" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Physiology" />
									<span>Physiology</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Nervous system" />
									<span>Nervous system</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Hormones" />
									<span>Hormones</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Corporate kriya" />
									<span>Corporate kriya</span>
								</Link>
							</NavDropdown>
							<NavDropdown title="Projects" id="navbarScrollingDropdown3" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="I and you green" />
									<span>I and you green</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="I and you vidhya" />
									<span>I and you Vidhya</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Sri nada" />
									<span>Sri nada</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Sri Krishi" />
									<span>Sri Krishi</span>
								</Link>
							</NavDropdown>
							<Link className="nav-link d-flex align-items-center text-uppercase" to="/wisdom/">
								<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Wisdom" />
								<span>Wisdom</span>
							</Link>
							<NavDropdown title="About Us" id="navbarScrollingDropdown5" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Guruji" />
									<span>Guruji</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Organization" />
									<span>Organization</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Contact" />
									<span>Contact</span>
								</Link>
							</NavDropdown>
							<NavDropdown title="Social impact" id="navbarScrollingDropdown6" className="dropmenu d-none">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Educations" />
									<span>Educations</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Peace" />
									<span>Peace</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Environmental" />
									<span>Environmental</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Organic farming" />
									<span>Organic farming</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Disaster relief - I and you Seva" />
									<span>Disaster relief - I and you Seva</span>
								</Link>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavHeader;
