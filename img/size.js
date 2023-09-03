import { useState, useEffect } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width, height
	};
}
function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState({width: null, height: null});
	useEffect(() => {
		if (typeof window !== undefined) {
		setWindowDimensions(getWindowDimensions())
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}}, []);
	return windowDimensions;
}

export { useWindowDimensions }
