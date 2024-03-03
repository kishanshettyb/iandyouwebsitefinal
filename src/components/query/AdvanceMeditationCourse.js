//
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const AdvanceMeditationCourse = () => {
	const data = useStaticQuery(graphql`
		query {
			allStrapiCourse(filter: { id: { eq: "8ab1f383-b2eb-5fe0-a266-f3e56fab1429" } }) {
				nodes {
					title
					time
					price
					mode
					desc
					date
					address
					image {
						url
					}
					id
				}
			}
		}
	`);
	return (
		<>
			{data.allStrapiCourse.nodes.map((node) => (
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
					{node.date ? (
						<li>
							<StaticImage className="icon" src="../../images/icons/calendar.svg" alt="" />
							{node.date}
						</li>
					) : (
						""
					)}
					{node.time ? (
						<li>
							<StaticImage className="icon" src="../images/icons/clock.svg" alt="" />
							{node.time}
						</li>
					) : (
						""
					)}
					{node.mode ? (
						<li>
							<StaticImage className="icon" src="../images/icons/video.svg" alt="" />
							{node.mode}
						</li>
					) : (
						""
					)}
					{node.address ? (
						<li>
							<StaticImage className="icon" src="../images/icons/map-pin.svg" alt="" />
							{node.address}
						</li>
					) : (
						""
					)}
					{node.price ? (
						<li>
							<StaticImage className="icon" src="../images/icons/rupee.svg" alt="" />
							{node.price}
						</li>
					) : (
						""
					)}
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
	);
};

export default AdvanceMeditationCourse;
