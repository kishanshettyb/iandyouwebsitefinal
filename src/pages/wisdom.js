import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

const wisdom = ({ data }) => {
	const jsonData = data;
	const { edges } = jsonData.allStrapiWisdom;

	return (
		<Layout>
			<Container>
				<Row>
					{edges.map(({ node }) => (
						<Col md={4} key={node.id}>
							<div className="wisdom-image position-relative">
								<img src={node.image.url} alt="Wisdom" className="img-fluid br-20 mb-4" />
								{/* <div className="share-icon">
									<StaticImage src="../images/icons/share-2.svg" alt="share" />
								</div> */}
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</Layout>
	);
};

export const query = graphql`
	query {
		allStrapiWisdom {
			edges {
				node {
					id
					image {
						url
					}
				}
			}
		}
	}
`;
export default wisdom;
