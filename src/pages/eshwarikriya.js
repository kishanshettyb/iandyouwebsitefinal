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
			<Banner title="Eshwari Kriya" subTitle="Celebrate life " mainLink="Eshwari Kriya" link="Eshwari Kriya" />
			<section>
				<Container>
					<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Eshwari Kriya </h2>
					<p className="fw-bold opacity-80 text-center">Celebrate life</p>
					<div className="text-center  mb-5">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>
					<p>
						I often tell my Sadhaks to Celebrate life, life is a celebration, it's a celebration by default but, why then are we struggling to lead a happy life ? why are we
						suffering ? why does it feel as if life is a misery ? It’s because we do not know the management, you may be a management student or an expert in objective world but
						life is a subjective world, so to celebrate life one must know the management of Body, Mind and Emotions for that one should have five types of strength which are
						already present but needs to be strengthened consciously without strengthening it one cannot experience the absolute truth, in sanskrit we call it as Bala (Strength)
						there are basically five types of Bala or Strenght or Power, the first one is Deha Bala which means Physical Strength , the second one is Mano Bala meaning Psychic
						Strength , the third one is Budhi Bala means Intellectual strength or Power , the fourth one is Athma Bala meaning the Power of the inner being and fifth one is very
						important that is Dhiva Bala means the power of the divine.
					</p>
					<p>
						You might be powerful or strong enough physically, mentally and intellectually but weak in terms of power of the inner being, then you cannot experience success in the
						meantime if you are strong at all above said four types of strengths but missing the cosmic support or divine’s grace and blessings even then one cannot experience
						success, here i am mentioning success in that context meaning happy, healthy,wealthy and holistic life.
					</p>
					<p>
						To lead a holistic life, one must strengthen the above five strengths. Eshwari Kriya is such a unique yogic technique which brings inner alignment in your body, mind,
						and energy which results in gaining the five strengths along with Body, Mind and emotions management to lead a holistic life
					</p>
					<p>- Sri Prasad</p>
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
		title="Sri Prasad"
		description="Sri Prasad, one of the eminent new age master of Spiritual Yogic Science, imparting knowledge through Yogic Science in the name of Eshwari sadhana. His vision to create a disease-free, stress-free and as a whole a holistic society, has brought millions together in India and overseas."
	/>
);
