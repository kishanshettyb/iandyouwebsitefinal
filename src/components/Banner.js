import React from "react";
import { Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Banner = (props) => {
	const guruji = "../images/banners/guruji-banner.png";
	const wisdom = "../images/banners/wisdom.jpeg";
	const stress = "../images/banners/stress.jpeg";
	const depression = "../images/banners/depresion.jpeg";
	const sleep = "../images/banners/sleep.jpeg";
	const backpain = "../images/banners/backpain.jpeg";
	const weightloss = "../images/banners/weightloss.jpg";
	const wellness = "../images/banners/wellness.jpeg";
	const immunity = "../images/banners/immunity.jpg";
	const relationship = "../images/banners/relationship.jpeg";
	return (
		<section className="banner-section">
			<Container fluid>
				<div className="banner-image-outer position-relative">
					{props.title === "Insight for Life" ? (
						<StaticImage className="banner-image" src={`${wisdom}`} alt="Page Banner" />
					) : props.title === "Stress" ? (
						<StaticImage className="banner-image" src={`${stress}`} alt="Page Banner" />
					) : props.title === "Depression" ? (
						<StaticImage className="banner-image" src={`${depression}`} alt="Page Banner" />
					) : props.title === "Sleep" ? (
						<StaticImage className="banner-image" src={`${sleep}`} alt="Page Banner" />
					) : props.title === "Back pain" ? (
						<StaticImage className="banner-image" src={`${backpain}`} alt="Page Banner" />
					) : props.title === "Weight Loss" ? (
						<StaticImage className="banner-image" src={`${weightloss}`} alt="Page Banner" />
					) : props.title === "Wellness" ? (
						<StaticImage className="banner-image" src={`${wellness}`} alt="Page Banner" />
					) : props.title === "Immunity" ? (
						<StaticImage className="banner-image" src={`${immunity}`} alt="Page Banner" />
					) : props.title === "Relationship" ? (
						<StaticImage className="banner-image" src={`${relationship}`} alt="Page Banner" />
					) : (
						<StaticImage className="banner-image" src={`${guruji}`} alt={props.title} />
					)}
					<div className="banner-overlay"></div>
				</div>
				<div className="banner-content">
					<h2 className="text-white fw-bold display-3 font-philosopher">{props.title}</h2>
					<p className="text-white fw-bold desc  m-xs-auto   opacity-80">{props.subTitle}</p>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li className="text-primary">/</li>
						<li>
							<Link to="#">{props.mainLink}</Link>
						</li>
						<li className="text-primary">/</li>
						<li>
							<Link to="#" className="text-white opacity-50">
								{props.link}
							</Link>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default Banner;
