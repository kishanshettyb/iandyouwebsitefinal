import * as React from "react";
import { graphql } from "gatsby";

const Page = ({ data }) => {
	const jsonData = data;
	console.log(jsonData);
	return (
		<>
			<p>{JSON.stringify(jsonData)}</p>
		</>
	);
};
export const query = graphql`
	query {
		allStrapiCourse {
			edges {
				node {
					title
					desc
					id
					price
					time
					address
					mode
					image {
						url
					}
				}
			}
		}
	}
`;
export default Page;
