import React from "react";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
	const pluginOptions = {
		head: true
	};
	if (process.env.NODE_ENV !== `production`) {
		return null;
	}

	const setComponents = pluginOptions.head ? setHeadComponents : setPostBodyComponents;
	return setComponents([
		<script
			async
			type="text/javascript"
			dangerouslySetInnerHTML={{
				__html: `
				 AOS.init();
				const cursor = document.querySelector(".cursor");
				console.log("test");

				document.addEventListener("mousemove", (e) => {
					cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
				});

				document.addEventListener("click", (e) => {
					cursor.classList.add("expand");
					setTimeout(() => {
						cursor.classList.remove("expand");
					}, 500);
				});

 
      `
			}}
		/>
	]);
};
