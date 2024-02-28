import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";

const srikrishi = () => {
	return (
		<Layout>
			<Banner title="Sri Krishi" subTitle="" mainLink="Projects" link="Sri Krishi" />

			<section>
				<Container>
					<h2 className="display-3 fw-bold font-philosopher text-primary  text-center">Project - I and You Green </h2>
					<p className="fw-bold opacity-80 text-center"></p>
					<div className="text-center  mb-5">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>

					<div className="quote">
						<StaticImage className="left" src="../images/icons/quote.png" alt="quote" />
						<StaticImage className="right" src="../images/icons/quote.png" alt="quote" />
						<p className="desc font-philosopher">
							Project - I and You Green “Planet green does not mean someone painted it, but it is the very life, green is life from god, and it’s our responsibility to restore and
							pass it on the next generation“
						</p>
						<p className="fw-bold font-niconne">- Sri Prasad</p>
					</div>
				</Container>
			</section>
			<section>
				<Container>
					<p>The seeds of this project were sown by Sri Prasad, founder of “I and You Being together foundation”.</p>
					<p>
						“Neem Tree Revolution” ‘nimbati swasthyam dadati’(giver of good health) Through this project we are sowing Neem Saplings to plant and instill a sense of environmental
						awareness amongst youth. By this project we consider it as a form of green activism through Saplings planting and Mini Forest formation to create a disease-free
						society.
					</p>
					<p>
						We have planted 250000+ plus saplings in Bangalore-Mysore-Belgaum in Karnataka, Hyderabad-Andhra Pradesh, Chennai-Madurai-Salem in Tamil nadu, Meerut-Uttar Pradesh
						London-UK, Berlin-Germany, Zanzibar-East Africa and Muscat.
					</p>
					<p>6 Mini forests across Bangalore and still on </p>
				</Container>
			</section>
			<section className="bg-light">
				<Container>
					<p>
						The seeds for the project were sown by Sri Prasad, founder of “I and You Being together foundation”, I and you green includes three separate projects they are namely{" "}
					</p>
					<ul className="regular-ul-list-none">
						<li>1. I AND YOU GREEN - Neem Saplings plantation</li>

						<li>2. MINI FOREST FORMATIONS - Bees & Birds attracting plants plantation</li>

						<li>3. SRI KRISHI - Promotion and creating awareness about organic farming </li>
					</ul>
					<p className="desc font-philosopher">Inaugurated by PADMA BHUSHAN KISAN BABURAO “ANNA” HAZARE</p>
					<div className="quote">
						<StaticImage className="left" src="../images/icons/quote.png" alt="quote" />
						<StaticImage className="right" src="../images/icons/quote.png" alt="quote" />
						<p className="desc font-philosopher">Awaken the Villages and Villagers’ development of villages is the light of progress and prosperity</p>
						<p className="fw-bold font-niconne">-Anna Hazare</p>
					</div>
				</Container>
			</section>
			<section>
				<Container>
					<h2 className="display-5 fw-bold font-philosopher text-primary mb-4">NEEM SAPLINGS PLANTATIONS </h2>
					<p>“Neem Tree Revolution” ‘nimbati swasthyam dadati’(giver of good health) </p>
					<p>-Through this project we sow Neem Saplings to plant and instill a sense of environmental awareness amongst youth</p>
					<p>-By this project we consider it as a form of green activism through tree planting and </p>
					<p>-to create a disease free and healthy society.</p>

					<p>We have planted 250000+ plus saplings in </p>
					<p>Karnataka,Andhra pradesh,Tamil nadu, and Meerut-Uttar Pradesh </p>
				</Container>
			</section>
			<section className="bg-light">
				<Container>
					<h2 className="display-5 fw-bold font-philosopher text-primary mb-4">MINI FOREST FORMATIONS </h2>
					<p>- To increase the farmer’s income through multiple fruit crops</p>
					<p>- Trees to conserve water and reduce soil erosion</p>
					<p>- To Increase ground water level</p>
					<p>- To restore, preserve and maintain the diverse flora and fauna which will lead to ecological stability - Help lower temperatures during concrete heat</p>
					<p>- Reduce air and noise pollution</p>
					<p>- Attract local birds and insects</p>
					<p>- To Create carbon sinks</p>
					<p>
						A multidisciplinary approach to support farmers finds financial stability through Agroforestry, an approach feasible for implementation and for environmental
						conservation, Fruits bearing forests includes Bee attracting and Birds attracting trees.
					</p>
					<p>When the system becomes successful and gets adopted by a series of farmers, it will lead to</p>
					<p>➢ Collective marketing to the distant metro cities </p>
					<p>➢ Brand can be created to channelize the produce in 54 retail malls and stores </p>
					<p>➢ Storage, processing, and value addition units viz. jams, jellies, dried powders, essential oils etc. can be set-up </p>
					<p>➢ Harnessing the medicinal properties of the crops for generating higher income </p>
					<p>➢ Export activities may be carried out</p>
					<p className="fw-bold">Criteria for maintenance:</p>
					<p>➢ Selection of planting material should be good </p>
					<p>➢ Protection and proper care must be taken of seedlings during younger age </p>
					<p>➢ Proper practice is necessary for harvesting and storage of the produce </p>
					<p>➢ Marketing and realizing profits must be prioritized</p>
					<p>
						SRI KRISHI refers to the divine aspect of agriculture, a gift to farmers welfare, their economic stability and empowerment through project SRI KRISHI an organic
						farming.{" "}
					</p>
					<p>
						Unfortunately, ecosystems in much of rural India today are highly degraded. This is an outcome of the rapid climate change and human activities leading to a state of
						massive ecological imbalance. This is one of the root causes of Rural Poverty{" "}
					</p>
					<p>The Sri Krishi in its approach to agroforestry and Organic farming has its motive mainly concerning</p>
					<h2 className="display-5 fw-bold font-philosopher text-center text-primary mb-4">I AND YOU GREEN - I BREATH FOR YOU , YOU BREATH FOR ME , I AND YOU BEING TOGETHER.</h2>
				</Container>
			</section>
		</Layout>
	);
};

export default srikrishi;
