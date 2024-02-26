import React, { useState, useEffect } from "react";

const Cursor = () => {
	const [cursorStyle, setCursorStyle] = useState({ top: 0, left: 0 });
	const [expand, setExpand] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setCursorStyle({ top: e.pageY - 10, left: e.pageX - 10 });
		};

		const handleClick = () => {
			setExpand(true);
			setTimeout(() => {
				setExpand(false);
			}, 500);
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<div className={`cursor ${expand ? "expand" : ""}`} style={cursorStyle}>
			<div className="point"></div>
		</div>
	);
};

export default Cursor;
