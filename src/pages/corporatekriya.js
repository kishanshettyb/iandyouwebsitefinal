import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";
import RegisterModal from "../components/RegisterModal";
const eshwarikriya = () => {
	return (
		<Layout>
			<Banner title="Corporate Eshwari Kriya" subTitle="" mainLink="Eshwari Kriya" link="Corporate Eshwari Kriya" />
			<section>
				<Container>
					<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Corporate Eshwari Kriya </h2>
					<p className="fw-bold opacity-80 text-center"></p>
					<div className="text-center  mb-5">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>
					<p>
						ESHWARI KRIYA is a time-tested practice that cultivates boundless levels of Emotional, Psychological and Physical fitness. It’s a busy and Competitive world we live in
						today with increasing demands on employers and employees alike. We work long hours, often hunched over a computer. We skip meals, keep a phone glued to our ear, and
						rarely leave our workspace for a break. Before long, these work habits begin to take their toll on our bodies and minds in the form of stress, tension and sickness and
						while a mild amount of stress can help us meet deadlines, too much stress, or constant stress, can interfere with numerous physical and mental abilities. How we respond
						to stress can have a significant impact on our total health.{" "}
					</p>
					<p>
						ESHWARI KRIYA can remove stress from the body and mind. Along with knowledge tips on Body management, Mind management and Emotional management, Eshwari Kriya for
						overall wellbeing to lead a Holistic life.
					</p>
				</Container>
			</section>
			<section>
				<Container>
					<h2 className="display-5 fw-bold font-philosopher text-primary  text-start">
						Corporate ESHWARI KRIYA Programs Have Many Benefits, 20 minutes regular practice of Eshwari kriya will create
					</h2>
					<ul className="mb-4">
						<li>Employees that are happy and full of energy, and as a result, more productive</li>
						<li>Decline in stress-related sick occurrences</li>
						<li>Improved concentration, decision-making skills and ability to multi-task</li>
						<li>Improves employee alertness and ability to react more calmly in demanding situations</li>
						<li>Relief of head, neck and back strain, carpal tunnel syndrome, insomnia, high blood pressure and work-related injuries from repetitive motion</li>
						<li>Better customer service</li>
						<li>one can maintain 16 hours of optimum energy level to perform well</li>
						<li>Enhanced employee attitude and outlook</li>
						<li>General well-being in the workplace which reduces employee turnover</li>
						<li>The Body, Mind and Emotional management is a part of Kriya</li>
					</ul>
					<p className="fw-bold mb-5">
						In simple statement we would say that ESHWARI KRIYA is a perfect tool for Happy, Healthy, Prosperous and Successful life Celebrate life through Eshwari Kriya. To
						celebrate life and to lead holistic life style Eshwari Kriya is a boon to the mankind.
					</p>
					<div className="text-center">
						<RegisterModal btnTitle="Register" size="lg" classes="d-inline-flex px-5 align-items-center" />
					</div>
				</Container>
			</section>
		</Layout>
	);
};

export default eshwarikriya;
export const Head = () => (
	<Seo
		title="Corporate Eshwari Kriya"
		description="ESHWARI KRIYA is a time-tested practice that cultivates boundless levels of Emotional, Psychological and Physical fitness. It’s a busy and Competitive world we live in today with increasing demands on employers and employees alike."
	/>
);
