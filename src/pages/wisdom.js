import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Banner from "../components/Banner";
import LightGallery from "lightgallery/react";
// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgZoom from "lightgallery/plugins/zoom";

const wisdom = ({ data }) => {
	const jsonData = data;
	const { edges } = jsonData.allStrapiWisdom;
	const onInit = () => {
		console.log("lightGallery has been initialized");
	};

	return (
		<Layout>
			<Banner title="Insight for Life" subTitle="Insights for Life: Unveiling the Essence of Wisdom" mainLink="wisdom" link="wisdom" />
			<section>
				<Container>
					<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Wisdom</h2>
					<p className="fw-bold opacity-80 text-center">Guiding Light: Navigating Life's Journey with Wisdom</p>
					<div className="text-center  mb-5">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>
					<Row>
						{edges.map(({ node }) => (
							<Col md={4} key={node.id}>
								<LightGallery onInit={onInit} speed={500} plugins={[lgZoom]}>
									<a href={node.image.url}>
										<img src={node.image.url} alt="Wisdom" className="img-fluid br-20 mb-4" />
									</a>
								</LightGallery>
							</Col>
						))}
					</Row>
				</Container>
			</section>
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
