import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";

const organization = () => {
	return (
		<Layout>
			<Banner title="Organization" subTitle="" mainLink="About" link="Organization" />
			<section>
				<Container>
					<h2 className="fw-bold text-primary display-3 mb-3 font-philosopher">Organization</h2>
					<p>
						Sri Prasad established an organization in 2012 and named it “I and You Being Together Foundation”, a non -profit making, non-religious and volunteer organization that
						aims in bringing stress-free, disease-free, violence-free and self-realization in individuals to form a holistic society, also dealing with several service activities
						on Social, Environmental and spiritual aspects.. I and You Being Together foundation has its main office in Bangalore-Karnataka, India and has established its branches
						in several states of India and overseas.
					</p>

					<p>The organization functions under the thriving service of its volunteers from India and various countries has illumined the lives of several million people.</p>
				</Container>
			</section>
		</Layout>
	);
};

export default organization;
