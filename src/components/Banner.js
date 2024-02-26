import React from "react";
import { Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Banner = (props) => {
	const guruji = "../images/banners/guruji-banner.png";
	const wisdom = "../images/banners/wisdom.jpeg";
	const contact = "../images/banners/guruji-banner.png";
	return (
		<section className="banner-section">
			<Container fluid>
				<div className="banner-image-outer position-relative">
					{props.title === "Contact" ? (
						<StaticImage className="banner-image" src={`${contact}`} alt="Page Banner" />
					) : props.title === "Insight for Life" ? (
						// 	<StaticImage className="image" src={`${srikari}`} alt="Page Banner" />
						// ) : props.title === "Sri (Lakshmi)" ? (
						// 	<StaticImage className="image" src={`${sri}`} alt="Page Banner" />
						// ) : props.title === "Immortal Process" ? (
						// 	<StaticImage className="image" src={`${immortal}`} alt="Page Banner" />
						// ) : props.title === "Kalavahana" ? (
						// 	<StaticImage className="image" src={`${kalavahana}`} alt="Page Banner" />
						// ) : props.title === "SVES" ? (
						// 	<StaticImage className="image" src={`${srividya}`} alt="Page Banner" />
						// ) : props.title === "Eshwari Dhyana" ? (
						// 	<StaticImage className="image" src={`${eshwaridhyana}`} alt="Page Banner" />
						// ) : props.title === "Devi Mathangi" ? (
						// 	<StaticImage className="image" src={`${matangi}`} alt="Page Banner" />
						// ) : props.title === "Devi Varahi" ? (
						// 	<StaticImage className="image" src={`${varahi}`} alt="Page Banner" />
						// ) : props.title === "Devi Chandi" ? (
						// 	<StaticImage className="image" src={`${chandi}`} alt="Page Banner" />
						// ) : props.title === "Dakshina Kali" ? (
						// 	<StaticImage className="image" src={`${kali}`} alt="Page Banner" />
						// ) : props.title === "Aham to Shivam" ? (
						// 	<StaticImage className="image" src={`${ahamtoshivam}`} alt="Page Banner" />
						// ) : props.title === "Navarathri" ? (
						// 	<StaticImage className="image" src={`${navarathri}`} alt="Page Banner" />
						// ) : props.title === "Sri Naada" ? (
						// 	<StaticImage className="image" src={`${srinaada}`} alt="Page Banner" />
						// ) : props.title === "Sri Vasukinaga Eswari Temple" ? (
						<StaticImage className="banner-image" src={`${wisdom}`} alt={props.title} />
					) : (
						<StaticImage className="banner-image" src={`${guruji}`} alt={props.title} />
					)}
					<div className="banner-overlay"></div>
				</div>
				<div className="banner-content tetx-center">
					<h2 className="text-white fw-bold tetx-center display-3 font-philosopher">{props.title}</h2>
					<p className="text-white fw-bold tetx-center opacity-80">{props.subTitle}</p>
				</div>
			</Container>
		</section>
	);
};

export default Banner;
