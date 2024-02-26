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
		</>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
