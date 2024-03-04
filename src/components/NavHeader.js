import { Link } from "gatsby";
import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Form } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { StaticImage } from "gatsby-plugin-image";
import RegisterModal from "../components/RegisterModal";
import Topbar from "./Topbar";

const NavHeader = () => {
	return (
		<>
			<Topbar />
			<Navbar expand="xxl" className="bg-primarylight d-none d-xxl-block ">
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
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/meditation/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Meditation" />
									<span>Meditation</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/beginners/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Beginners" />
									<span>Beginner</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/advance/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Advance" />
									<span>Advance</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/relaxation/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Relaxations" />
									<span>Relaxation</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/childrens/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Childrens" />
									<span>Childrens</span>
								</Link>
							</NavDropdown>
							<NavDropdown title="Eshwari kriya" id="navbarScrollingDropdown22" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/eshwarikriya/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Eshwari kriya" />
									<span>Eshwari kriya</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/physiology/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Physiology" />
									<span>Physiology</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/nervoussystem/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Nervous system" />
									<span>Nervous system</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/hormones/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Hormones" />
									<span>Hormones</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/corporatekriya/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Corporate kriya" />
									<span>Corporate kriya</span>
								</Link>
							</NavDropdown>
						</Nav>
						<Navbar.Brand href="/" className="d-flex align-items-center">
							<StaticImage src="../images/I And You.png" alt="I and You" className="logo" />
						</Navbar.Brand>
						<Nav className="m-auto w-50 justify-content-start  my-2 my-lg-0 ms-4" style={{ maxHeight: "700px" }} navbarScroll>
							<NavDropdown title="Projects" id="navbarScrollingDropdown33" className="dropmenu">
								<a target="_blank" rel="noreferrer" className="nav-link d-flex align-items-center text-uppercase" href="https://iandyougreen.org/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="star" />
									<span>I and you green</span>
								</a>
								<NavDropdown.Divider />
								<a target="_blank" rel="noreferrer" className="nav-link" href="https://iandyouvidhya.org/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="I and you Vidhya" />
									<span>I and you Vidhya</span>
								</a>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/srinaada/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Sri Naada" />
									<span>Sri Naada</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/srikrishi/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Sri Krishi" />
									<span>Sri Krishi</span>
								</Link>
							</NavDropdown>
							<Link className="nav-link d-flex align-items-center text-uppercase" to="/wisdom/">
								<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Wisdom" />
								<span>Wisdom</span>
							</Link>
							<NavDropdown title="About Us" id="navbarScrollingDropdown44" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/guruji/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Guruji" />
									<span>Guruji</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/organization/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Organization" />
									<span>Organization</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/contact/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Contact" />
									<span>Contact</span>
								</Link>
							</NavDropdown>
							<Link className="nav-link" to="/">
								<span></span>
							</Link>
						</Nav>
						<Form className="position-absolute right-10 d-none d-xxl-block">
							<RegisterModal btnTitle="Register" variant="primary" size="md" classes="d-flex align-items-center px-4" courseName="Eshwari Kriya Course" />
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* Mobile */}
			<Navbar expand="lg" className="bg-primarylight d-block d-lg-none mobile">
				<Container>
					<Navbar.Brand href="/">
						<StaticImage src="../images/I And You.png" alt="I and You" className="logo-small" />
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
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/meditation/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Meditation" />
									<span>Meditation</span>
								</Link>
								<NavDropdown.Divider />

								<Link className="nav-link d-flex align-items-center text-uppercase" to="/beginners/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Beginners" />
									<span>Beginner</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/advance/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Advance" />
									<span>Advance</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/relaxation/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Relaxations" />
									<span>Relaxation</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/childrens/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Childrens" />
									<span>Childrens</span>
								</Link>
							</NavDropdown>
							<NavDropdown title="Eshwari kriya" id="navbarScrollingDropdown2" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/eshwarikriya/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Eshwari kriya" />
									<span>Eshwari kriya</span>
								</Link>
								<NavDropdown.Divider />

								<Link className="nav-link d-flex align-items-center text-uppercase" to="/physiology/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Physiology" />
									<span>Physiology</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/nervoussystem/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Nervous system" />
									<span>Nervous system</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/hormones/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Hormones" />
									<span>Hormones</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/corporatekriya/">
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
								<Link className="nav-link" to="/srinaada/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Sri Naada" />
									<span>Sri Naada</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/srikrishi/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Sri Krishi" />
									<span>Sri Krishi</span>
								</Link>
							</NavDropdown>
							<Link className="nav-link d-flex align-items-center text-uppercase" to="/wisdom/">
								<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Wisdom" />
								<span>Wisdom</span>
							</Link>
							<NavDropdown title="About Us" id="navbarScrollingDropdown5" className="dropmenu">
								<Link className="nav-link d-flex align-items-center text-uppercase" to="/guruji/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Guruji" />
									<span>Guruji</span>
								</Link>
								<NavDropdown.Divider />
								<Link className="nav-link" to="/organization/">
									<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Organization" />
									<span>Organization</span>
								</Link>
							</NavDropdown>
							<Link className="nav-link home  d-flex align-items-center text-uppercase" to="/contact/">
								<StaticImage className="icon me-2" src="../images/icons/star.svg" alt="Home" />
								<span>Contact</span>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavHeader;
