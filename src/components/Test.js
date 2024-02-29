import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

const Test = (props) => {
	return (
		<>
			<p>djshdj</p>
			<StaticQuery
				query={graphql`
					query {
						allStrapiCourse(filter: { id: { eq: "268ef47a-dc17-517d-a365-7f9119e4c636" } }) {
							edges {
								node {
									title
									desc
									id
									image {
										url
									}
								}
							}
						}
					}
				`}
				render={(data) => (
					<>
						{data.allStrapiCourse.edges.map(({ node }) => (
							<p className={props.fw} md={4} key={node.id}>
								{node.title}
							</p>
						))}
					</>
				)}
			/>
		</>
	);
};

export default Test;
