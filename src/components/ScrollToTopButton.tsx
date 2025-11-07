"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = useCallback(() => {
		const toggleVisibility = window.scrollY > 300;
		setIsVisible(toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	const baseClasses =
		" fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-opacity duration-300 ease-in-out cursor-pointer z-50";
	const colorClasses =
		"bg-zinc-900 text-white hover:bg-zinc-700 focus:outline-none focus:ring-4 focus:ring-zinc-300 ";

	const visibilityClasses = isVisible
		? "opacity-100 scale-100"
		: "opacity-0 scale-90 pointer-events-none";

	return (
		<button
			type="button"
			onClick={scrollToTop}
			className={`${baseClasses} ${colorClasses} ${visibilityClasses}`}
			aria-label="Scroll to top"
			disabled={!isVisible}
		>
			<ArrowUp className="before:w-0 before:h-0 w-6 h-6" />
		</button>
	);
};

export default ScrollToTopButton;
