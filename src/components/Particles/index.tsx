"use client";

import "pathseg";

import Particle, { initParticlesEngine } from "@tsparticles/react";
import { options } from "./particleOptions";
import { useEffect, useState } from "react";
import { loadPolygonShape } from "@tsparticles/shape-polygon";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import { loadSlim } from "@tsparticles/slim";

const Particles = function () {
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
			// await loadPolygonShape(engine);
			await loadPolygonMaskPlugin(engine);
		}).then(() => {
			setInitialized(true);
		});
	}, []);

	if (!initialized) return null;

	return (
		<Particle options={options} id="tsparticles" className="dark:invert" />
	);
};

export default Particles;
