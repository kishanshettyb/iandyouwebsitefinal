import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";
import RegisterModal from "../components/RegisterModal";
const physiology = () => {
	return (
		<Layout>
			<Banner title="Physiology" subTitle="On Physical Level" mainLink="Eshwari Kriya" link="Physiology" />
			<section>
				<Container>
					<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">ON PHYSICAL LEVEL </h2>
					<p className="fw-bold opacity-80 text-center"> </p>
					<div className="text-center  mb-5">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>
					<p>
						Eshwari Kriya, Dhyana along with Hata yoga promotes physical health in multiple different ways. Some of them derive from better stress management. Others come more
						directly from the physical movements and postures in yoga, which help promote Stability, flexibility and reduce Muscles and joint pain.
					</p>
					<p>
						Following is some of the physical benefits of yoga that have a growing body of research behind them. In addition to the conditions listed below, preliminary research
						also shows that yoga may help with migraines, osteoporosis, balance and mobility issues, multiple sclerosis, inflammatory bowel disease, fibromyalgia, and ADHD.
					</p>
					<ul>
						<li>Keeps you healthy and fit.</li>
						<li>Stimulates energy throughout the body and aids inner balance.</li>
						<li>Rejuvenates tired cells, helping in reducing early signs of aging.</li>
						<li>Keeps you active throughout the day and maintains energy level for 16 hours in optimum.</li>
						<li>Strengthens Immunity</li>
					</ul>
					<div className="text-center">
						<RegisterModal btnTitle="Register" size="lg" classes="d-inline-flex px-5 align-items-center" />
					</div>
				</Container>
			</section>
		</Layout>
	);
};

export default physiology;
export const Head = () => (
	<Seo
		title="Physiology"
		description="ON PHYSICAL LEVEL Eshwari Kriya, Dhyana along with Hata yoga promotes physical health in multiple different ways. Some of them derive from better stress management. Others come more directly from the physical movements and postures in yoga, which help promote Stability, flexibility and reduce Muscles and joint pain."
	/>
);
