import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";

const srikrishi = () => {
	return (
		<Layout>
			<Banner title="Sri Krishi" subTitle="Formers welfare project" mainLink="Projects" link="Sri Krishi" />

			<section>
				<Container>
					<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">SRI KRISHI</h2>
					<p className="fw-bold opacity-80 text-center">Formers welfare project</p>
					<div className="text-center  mb-5">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>
					<p>
						upcoming project with Lake rejuvenations, Farmers bore well recharging and mini forest formation, the organization functions under the thriving service of its
						volunteers from various countries and has illumined the lives of several million people
					</p>
					<p>
						SRI KRISHI is involved in the promotion of organic agriculture in rural development. 2 villages have been adopted, Training and support services are provided, the main
						goal of the project is to reach the message of organic agriculture in rural areas and demonstrate the same for rural development, poverty reduction, ecological farming,
						natural resource management, biodiversity conservation and protection of environment.
					</p>
					<ul className="regular-ul-list-none">
						<li>a. village adaptation</li>
						<li>b. Organic cultivation awareness</li>
						<li>c. Organic multiple crop awareness</li>
						<li>d. Lake rejuvenations</li>
						<li>e. farmer's bore well recharge</li>
						<li>f. Mini Forest formations</li>
						<li>g. Rain water harvesting</li>
					</ul>
					<p>
						The project Inaugurated by Padma bushan Kisan Baburao Hazare popularly known as Anna Hazare is an Indian social activist who led movements to promote rural development,
						increase government transparency, and investigate and punish corruption in public life.
					</p>
				</Container>
			</section>
		</Layout>
	);
};

export default srikrishi;
