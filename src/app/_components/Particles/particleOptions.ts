import { ISourceOptions } from "@tsparticles/engine";

export const options: ISourceOptions = {
	autoPlay: true,
	background: {
		color: {
			value: "transparent",
		},
		image: "",
		position: "50% 50%",
		repeat: "no-repeat",
		size: "cover",
		opacity: 1,
	},
	backgroundMask: {
		composite: "destination-out",
		cover: {
			opacity: 1,
			color: {
				value: "",
			},
		},
		enable: false,
	},
	clear: true,
	defaultThemes: {},
	delay: 0,
	fullScreen: {
		enable: true,
		zIndex: 0,
	},
	detectRetina: true,
	duration: 0,
	fpsLimit: 60,
	interactivity: {
		detectsOn: "window",
		events: {
			onHover: {
				enable: true,
				mode: "bubble",
			},
			resize: {
				delay: 0.5,
				enable: true,
			},
		},
		modes: {
			bounce: {
				distance: 200,
			},
			bubble: {
				distance: 120,
				duration: 1,
				mix: false,
				opacity: 1,
				size: 5,
				divs: {
					distance: 200,
					duration: 1,
					mix: false,
				},
			},
			connect: {
				distance: 10,
				links: {
					opacity: 0.5,
				},
				radius: 60,
			},
			grab: {
				distance: 100,
				links: {
					blink: false,
					consent: false,
					opacity: 1,
				},
			},
			push: {
				default: true,
				groups: [],
				quantity: 4,
			},
			remove: {
				quantity: 2,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
				factor: 100,
				speed: 1,
				maxSpeed: 50,
				easing: "ease-out-quad",
				divs: {
					distance: 200,
					duration: 0.4,
					factor: 100,
					speed: 1,
					maxSpeed: 50,
					easing: "ease-out-quad",
					selectors: {},
				},
			},
			slow: {
				factor: 1,
				radius: 0,
			},
			particle: {
				replaceCursor: false,
				pauseOnStop: false,
				stopDelay: 0,
			},
		},
	},
	manualParticles: [],
	particles: {
		bounce: {
			horizontal: {
				value: 1,
			},
			vertical: {
				value: 1,
			},
		},
		collisions: {
			absorb: {
				speed: 2,
			},
			bounce: {
				horizontal: {
					value: 1,
				},
				vertical: {
					value: 1,
				},
			},
			enable: false,
			maxSpeed: 50,
			mode: "absorb",
			overlap: {
				enable: true,
				retries: 0,
			},
		},
		color: {
			value: "#050505",
			animation: {
				h: {
					count: 0,
					enable: false,
					speed: 1,
					decay: 0,
					delay: 0,
					sync: true,
					offset: 0,
				},
				s: {
					count: 0,
					enable: false,
					speed: 1,
					decay: 0,
					delay: 0,
					sync: true,
					offset: 0,
				},
				l: {
					count: 0,
					enable: false,
					speed: 1,
					decay: 0,
					delay: 0,
					sync: true,
					offset: 0,
				},
			},
		},
		move: {
			angle: {
				offset: 0,
				value: 90,
			},
			attract: {
				distance: 200,
				enable: false,
				rotate: {
					x: 3000,
					y: 3000,
				},
			},
			center: {
				x: 50,
				y: 50,
				mode: "percent",
				radius: 0,
			},
			decay: 0,
			distance: {},
			direction: "none",
			drift: 0,
			enable: true,
			gravity: {
				acceleration: 9.81,
				enable: false,
				inverse: false,
				maxSpeed: 50,
			},
			path: {
				clamp: true,
				delay: {
					value: 0,
				},
				enable: false,
				options: {},
			},
			outModes: {
				default: "bounce",
				bottom: "bounce",
				left: "bounce",
				right: "bounce",
				top: "bounce",
			},
			random: false,
			size: false,
			speed: 0.3,
			spin: {
				acceleration: 0,
				enable: false,
			},
			straight: false,
			trail: {
				enable: false,
				length: 10,
				fill: {},
			},
			vibrate: false,
			warp: false,
		},
		number: {
			density: {
				enable: false,
				width: 1920,
				height: 1080,
			},
			limit: {
				mode: "delete",
				value: 0,
			},
			value: 200,
		},
		opacity: {
			value: {
				min: 0.05,
				max: 0.4,
			},
			animation: {
				count: 0,
				enable: true,
				speed: 2,
				decay: 0,
				delay: 0,
				sync: false,
				mode: "auto",
				startValue: "random",
				destroy: "none",
			},
		},
		reduceDuplicates: false,
		shape: {
			close: true,
			fill: true,
			options: {},
			type: "circle",
		},
		size: {
			value: 1,
			animation: {
				count: 0,
				enable: false,
				speed: 5,
				decay: 0,
				delay: 0,
				sync: false,
				mode: "auto",
				startValue: "random",
				destroy: "none",
			},
		},
		stroke: {
			width: 0,
		},
		zIndex: {
			value: 0,
			opacityRate: 1,
			sizeRate: 1,
			velocityRate: 1,
		},
		destroy: {
			bounds: {},
			mode: "none",
			split: {
				count: 1,
				factor: {
					value: 3,
				},
				rate: {
					value: {
						min: 4,
						max: 9,
					},
				},
				sizeOffset: true,
				particles: {},
			},
		},
		roll: {
			darken: {
				enable: false,
				value: 0,
			},
			enable: false,
			enlighten: {
				enable: false,
				value: 0,
			},
			mode: "vertical",
			speed: 25,
		},
		tilt: {
			value: 0,
			animation: {
				enable: false,
				speed: 0,
				decay: 0,
				sync: false,
			},
			direction: "clockwise",
			enable: false,
		},
		twinkle: {
			lines: {
				enable: false,
				frequency: 0.05,
				opacity: 1,
			},
			particles: {
				enable: false,
				frequency: 0.05,
				opacity: 1,
			},
		},
		wobble: {
			distance: 5,
			enable: false,
			speed: {
				angle: 50,
				move: 10,
			},
		},
		life: {
			count: 0,
			delay: {
				value: 0,
				sync: false,
			},
			duration: {
				value: 0,
				sync: false,
			},
		},
		rotate: {
			value: 0,
			animation: {
				enable: false,
				speed: 0,
				decay: 0,
				sync: false,
			},
			direction: "clockwise",
			path: false,
		},
		orbit: {
			animation: {
				count: 0,
				enable: false,
				speed: 1,
				decay: 0,
				delay: 0,
				sync: false,
			},
			enable: false,
			opacity: 1,
			rotation: {
				value: 45,
			},
			width: 1,
		},
		links: {
			blink: false,
			color: {
				value: "#050505",
			},
			consent: false,
			distance: 50,
			enable: true,
			frequency: 1,
			opacity: 0.4,
			shadow: {
				blur: 5,
				color: {
					value: "#000",
				},
				enable: false,
			},
			triangles: {
				enable: false,
				frequency: 0.1,
			},
			width: 1,
			warp: false,
		},
		repulse: {
			value: 0,
			enabled: false,
			distance: 1,
			duration: 1,
			factor: 1,
			speed: 1,
		},
	},
	pauseOnBlur: true,
	pauseOnOutsideViewport: true,
	responsive: [],
	smooth: false,
	style: {},
	themes: [],
	zLayers: 100,
	key: "polygonMask",
	name: "Polygon Mask",
	motion: {
		disable: false,
		reduce: {
			factor: 4,
			value: true,
		},
	},
	polygon: {
		draw: {
			enable: true,
			stroke: {
				color: {
					value: "#050505",
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
		// url: "https://particles.js.org/images/smalldeer.svg",
		url: "/logo-react.svg",
		position: {
			x: 80,
			y: 50,
		},
	},
};
