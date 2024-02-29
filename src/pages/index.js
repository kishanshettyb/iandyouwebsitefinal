import * as React from "react";
import CelebrateLife from "../components/CelebrateLife";
import Footer from "../components/Footer";
import Guruji from "../components/Guruji";
import Hero from "../components/Hero";
import Join from "../components/Join";
import NavHeader from "../components/NavHeader";
import Solutions from "../components/Solutions";
import Testimonial from "../components/Testimonial";
import Wisdom from "../components/Wisdom";
import Workshops from "../components/Workshops";
import EshwariKriya from "../components/EshwariKriya";
import Meditation from "../components/Meditation";
import PopupModal from "../components/PopupModal";
import { Seo } from "../components/Seo";
import Test from "../components/Test";

const IndexPage = () => {
	return (
		<>
			<NavHeader />
			<Hero />
			<Solutions />
			<EshwariKriya />
			<CelebrateLife />
			<Workshops />
			<Meditation />
			<Testimonial />
			<Guruji />
			<Join />
			<Wisdom />
			<Footer />
			<PopupModal />
			<Test courseId="Advanced" />
		</>
	);
};

export default IndexPage;

export const Head = () => (
	<Seo
		title="I And You Being Together Foundation"
		description="Sri Prasad, one of the eminent new age masters of Spiritual Srividhya Yogic Science, has been imparting the knowledge of Yogic Science in the name of Eshwari Sadhana.

Sri Prasad having established an organization in 2012 had named it “I and You Being Together Foundation”, a non -profit making, non-religious and volunteer organization that aims in bringing stress-free, disease-free, violence-free and self-realization in individuals to form a holistic society, has brought millions together in India and overseas."
	/>
);
