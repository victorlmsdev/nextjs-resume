"use client";

import Particle, { initParticlesEngine } from "@tsparticles/react";
import "pathseg";
import { useEffect, useMemo, useState } from "react";
import { options } from "./particleOptions";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

const DARK_COLOR = "#FFF";
const LIGHT_COLOR = "#050505";

const linksBase = {
	blink: false,
	color: {
		value: DARK_COLOR,
	},
	consent: false,
	distance: 50,
	enable: true,
	frequency: 0.7,
	opacity: 0.4,
	width: 1,
	warp: false,
};

const polygonBase = {
	draw: {
		enable: true,
		stroke: {
			color: {
				value: DARK_COLOR,
			},
			width: 1,
			opacity: 0.1,
		},
	},
	enable: true,
	inline: {
		arrangement: "equidistant",
	},
	move: {
		radius: 10,
		type: "path",
	},
	scale: 1,
	type: "inline",
	url: "/logo-react.svg",
	position: {
		x: 80,
		y: 50,
	},
};

const Particles = function () {
	const [initialized, setInitialized] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
			await loadPolygonMaskPlugin(engine);
		}).then(() => {
			setInitialized(true);
		});
	}, []);

	const customOptions = useMemo(() => {
		const colorValue = theme === "dark" ? DARK_COLOR : LIGHT_COLOR;

		return {
			...options,

			particles: {
				...options.particles,
				color: { value: colorValue },

				links: {
					...linksBase,
					color: { value: colorValue },
				},
			},
			polygon: {
				...polygonBase,
				draw: {
					...polygonBase.draw,
					stroke: {
						...polygonBase.draw.stroke,

						color: { value: colorValue },
					},
				},
			},
		};
	}, [theme]);

	if (!initialized) return null;

	return (
		<Particle
			options={customOptions}
			id="tsparticles"
			className="absolute inset-0 w-full h-full z-0"
		/>
	);
};

export default Particles;
