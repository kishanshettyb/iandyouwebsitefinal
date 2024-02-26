import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import { Seo } from "../components/Seo";

const pain = () => {
	return (
		<Layout>
			<Banner title="Back pain" subTitle="Leave back all the pain" mainLink="Solutions For" link="Back pain" />
			<Container>
				<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Back pain </h2>
				<p className="fw-bold opacity-80 text-center">Leave back all the pain</p>
				<div className="text-center  mb-5">
					<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
				</div>
				<p>
					Most of the yoga-based studies so far have relied on patients experience and rating of pain and disability as an indicator of recovery and better quality of life.
					Researchers who measured pain, pain tolerance and body flexibility have found that yoga leads to pain relief, increases tolerance of pain and improves flexibility in
					patients of chronic low back pain.
				</p>
				<p>
					Dr Renu Bhatia, Additional Professor, Department of Physiology, AIIMS, New Delhi conducted research to measure the impact of yoga on Chronic Low Back Pain (CLBP) along
					with Dr Raj Kumar Yadav (Professor, Department of Physiology, AIIMS, New Delhi), Dr Sri Kumar V (Associate Professor, Department of Physical Medicine & Rehabilitation,
					AIIMS, New Delhi).
				</p>
				<p>
					The study conducted on 100 Chronic Low Back Pain (CLBP) patients of 50 years with 3 years of history of the disease. After systematic Yogic intervention of 4 weeks,
					Quantitative sensory testing (QST) showed increase in thresholds for cold pain and cold pain tolerance. Corticomotor excitability and flexibility improved significantly
					in the patients
				</p>
				<p>The physical body always needs Exercise, if lack of mobility, stability and stretching is not given then it will start showing pain.</p>
				<p>
					More over one should take care of intake meaning food, if the food produces more acid then the muscles, joints and back will start paining, giving exercise to the body
					and proper diet along with Eshwari Kriya and Dhyana will help you manage Pain
				</p>

				<p className="fw-bold fs-3 font-niconne">- Sri Prasad</p>
			</Container>
		</Layout>
	);
};

export default pain;
export const Head = () => (
	<Seo
		title="Back pain"
		description="Most of the yoga-based studies so far have relied on patients experience and rating of pain and disability as an indicator of recovery and better quality of life. Researchers who measured pain, pain tolerance and body flexibility have found that yoga leads to pain relief, increases tolerance of pain and improves flexibility in patients of chronic low back pain."
	/>
);
