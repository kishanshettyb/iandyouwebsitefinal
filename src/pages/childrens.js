import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

const childrens = () => {
	return (
		<Layout>
			<Banner title="Sanskar" subTitle="Ancient roots, Modern shoots " mainLink="Meditation" link="Childrens" />
			<section>
				<Container>
					<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Sanskar</h2>
					<p className="fw-bold opacity-80 text-center">Ancient roots, Modern shoots </p>
					<div className="text-center  mb-5">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>
					<p>
						The word 'SANSKAR' has its origin in the Sanskrit, SANSKAR literally means refinement to achieve Clarity, Purity and Sincerity, the meaning of the word 'SANSKAR' is to
						purify, to refine, to supplement, to brighten, to adorn the consciousness{" "}
					</p>
					<p>
						Today's lifestyle and the method of education system is ignoring these important qualities and the values in our children's lives, a thought from Guruji to induce these
						required qualities and values in children, came up the personality development program for children through "SANSKAR" that has been built on yogic platform to improvise
						the qualities and values in children by imbibing our very rich and ancient teaching methodology.
					</p>

					<p>
						SANSKAR is a workshop for kids from 5 to 14 years of age, the workshop is designed for the child's holistic overall development physically, mentally and emotionally.
					</p>
					<p>A new age 5 day workshop with a strong focus on academic Planning and Value based teaching to make educational experience for children truly transformational.</p>
				</Container>
			</section>
			<section className="bg-light">
				<Container>
					<h2 className="fw-bold text-primary display-2 text-center mb-3 font-philosopher">ESHWARI KIDS KRIYA </h2>

					<p className="text-center">SANSKAR aims at the holistic development of a child through</p>
					<p className="text-center mb-5">
						Eshwari kids kriya, a simple 10 minutes Kriya yoga technique to develop the potential of the Brain and to improve Memory, intelligence, confidence and sharp perception,
						to lead happy, healthy, stress free and successful life.
					</p>

					<h2 className="fw-bold text-primary display-6 mb-3 font-philosopher">VALUE BASED TEACHING</h2>

					<p className="mb-5">
						Daily Prayers to build faith, to surrender and accept the realities of life and to gain the support, protection and guidance from the higher supreme power.
					</p>

					<h2 className="fw-bold text-primary display-6 mb-3 font-philosopher">ACADEMIC PLANNING </h2>

					<p>
						Academic planning plays a major role in children's life with proper planning their stress levels can be reduced and bring develop the sense for time management and be
						able to accept great responsibilities along with:{" "}
					</p>
					<ul className="mb-5">
						<li>Personality Grooming </li>
						<li>Life Skills Development </li>
						<li>Strengthening Leadership Qualities </li>
						<li>Personal hygiene </li>
						<li>Personal care and protection </li>
						<li>Other aspects involving Fun and Value based teachings through Traditional village games.</li>
					</ul>
					<h2 className="fw-bold text-primary display-6 mb-3 font-philosopher">TREDITIONAL VILLAGE GAMES </h2>

					<p>
						SANSKAR workshop through traditional village games, supports the children for their overall wellness by providing skill enriched activities that enhance thinking
						capabilities, bring out clarity and confidence, keep them physically, mentally active and emotionally well balanced, teachers receive thorough training to impart
						SANSKAR and train their students at their schools.
					</p>

					<p className="mb-5">
						SANSKAR is taught by various traditional methods and activities from which students learn lessons of values, sharing and caring for others, to create harmony within
						their surroundings and bonding with oneness.
					</p>

					<h2 className="fw-bold text-primary display-6 mb-3 font-philosopher">GOOD TOUCH AND BAD TOUCH</h2>

					<p>
						Our aim is to create awareness in children about the ethical values and bring out the sense of understanding in them to identify “GOOD TOUCH AND BAD TOUCH” owing to the
						atrocities of today's society where children are Man handled, sexually abused and so forth by known and unknown people of their surroundings.
					</p>
				</Container>
			</section>
			<section>
				<Container>
					<h2 className="fw-bold text-primary display-6 mb-3 font-philosopher">I AND YOU GREEN</h2>

					<p>SANSKAR includes the environmental activities to bring quality, purity and stability in life to </p>
					<p>
						provide children with the opportunity to take up responsibility for themselves and others in order to nurture a greater sense of commitment towards environmental,
						social responsibilities and to enable them to contribute to the family and society in which they live.
					</p>
					<p>To allow a child to grow with an uncluttered intelligence so that she/he can perceive and experience life as it is, without distortion.</p>
					<p>
						To mold children into sensible, respectful, and vibrant human beings who have necessary confidence, openness and willingness to question themselves and the society they
						live in.
					</p>
					<p>
						We being Parents and sensible citizens, are also held responsible to bring ethics and values into our child's life at an early age. This is the main role that SANSKAR
						serves in a child's life.
					</p>

					<p>
						Teachers are a way of passing on lessons of behavior, knowledge and wisdom that have been a part of our culture and heritage for the longest time, for the past 4 years
						I and You BeinouTogether Foundation's Volunteer Teachers of SANSKAR have trained over 1.5 lakh children from Karnataka and Tamilnadu in turn have been benefited from
						the same.
					</p>
					<p>SANSKAR workshop aims to create a respectable, responsible and resourceful citizen for our country.</p>

					<p>- Jai Guru Dev</p>
				</Container>
			</section>
		</Layout>
	);
};

export default childrens;
export const Head = () => (
	<Seo
		title="SANSKAR"
		description="SANSKAR - Ancient roots, Modern shoots The word 'SANSKAR' has its origin in the Sanskrit, SANSKAR literally means refinement to achieve Clarity, Purity and Sincerity, the meaning of the word 'SANSKAR' is to purify, to refine, to supplement, to brighten, to adorn the consciousness"
	/>
);
