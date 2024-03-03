import * as React from "react";
import { graphql } from "gatsby";

const Test = ({ data }) => (
	<ul>
		{data.allStrapiCourse.nodes.map((node) => (
			<li key={node.id}>
				<h2>{node.title}</h2>
				<p>Time: {node.time}</p>
				<p>Price: {node.price}</p>
				<p>Mode: {node.mode}</p>
				<p>Description: {node.desc}</p>
				<p>Date: {node.date}</p>
				<p>Address: {node.address}</p>
				{node.image && <img src={node.image.url} alt="program" className="reg-modal-image" />}
			</li>
		))}
	</ul>
);

export const query = graphql`
	query {
		allStrapiCourse(filter: { id: { eq: "268ef47a-dc17-517d-a365-7f9119e4c636" } }) {
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
`;

export default Test;
