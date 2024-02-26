import React from "react";
import Footer from "./Footer";
import NavHeader from "./NavHeader";

export default function Layout({ children }) {
	return (
		<div>
			<NavHeader />
			{children}
			<Footer />
		</div>
	);
}
