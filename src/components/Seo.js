import React from "react";
import iconImg from "../images/icon.png";

export const Seo = ({ title, description, pathname, children }) => {
	// const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata();
	const defaultTitle = "I And You Being Together Foundation";
	const defaultDescription = "I And You Being Together Foundation";
	const siteUrl = "http://localhost:8000";
	const image = iconImg;
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image}`
		// url: `${siteUrl}${pathname || ``}`,
		// twitterUsername
	};

	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={seo.title} />
			<meta name="impact-site-verification" value="c1536b5d-31d4-4c0d-9208-758ecde8eedf"></meta>
			{/* <meta name="twitter:url" content={seo.url} /> */}
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:image" content={seo.image} />
			{/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
			<link rel="icon" src={seo.image} />
			<link rel="icon" type="image/x-icon" href="../images/icon.ico" />
			{children}
		</>
	);
};
