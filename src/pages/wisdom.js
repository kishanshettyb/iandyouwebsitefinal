import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/Banner";
import Wisdom from "../components/Wisdom";
import { StaticImage } from "gatsby-plugin-image";

const wisdom = ({ data }) => {
	const jsonData = data;
	const { edges } = jsonData.allStrapiWisdom;

	return (
		<Layout>
			<Banner title="Insight for Life" subTitle="Insights for Life: Unveiling the Essence of Wisdom" />
			<Container>
				<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Wisdom</h2>
				<p className="fw-bold opacity-80 text-center">Guiding Light: Navigating Life's Journey with Wisdom</p>
				<div className="text-center  mb-5">
					{/* <StaticImage src="../images/others/line-1.png" alt="line" /> */}
					<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
				</div>
				<Row>
					{edges.map(({ node }) => (
						<Col md={4} key={node.id}>
							<div className="wisdom-image position-relative">
								<img src={node.image.url} alt="Wisdom" className="img-fluid br-20 mb-4" />
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
