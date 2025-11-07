import { ISourceOptions } from "@tsparticles/engine";

export const options: ISourceOptions = {
	// REMOVA esta seção, o tamanho deve ser definido pelo componente pai
	// style: {
	//     width: "50%",
	// },
	autoPlay: true,
	background: {
		color: {
			value: "transparent", // Mude para um fundo visível para teste, como o azul do React
		},
	},
	interactivity: {
		detectsOn: "window",
		events: {
			onHover: {
				enable: true,
				mode: "grab",
				parallax: {
					enable: false,
					force: 0.5,
					smooth: 10,
				},
			},
			resize: {
				delay: 0.5,
				enable: true,
			},
		},
	},

	particles: {
		number: {
			value: 500,
		},
		color: {
			value: "#050505", // Mude a cor da partícula para o azul do React para contraste
		},
		size: {
			value: { min: 1, max: 2 },
		},
		links: {
			enable: true,
			distance: 50,
			color: "#050505", // Cor dos links
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,

			speed: 0.5,
		},
		shape: {
			type: "path",
		},
	},

	polygon: {
		enable: true,
		type: "inline",

		url: "/logo-react.svg",
		// url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
		inline: {
			arrangement: "equidistant",
		},
		// *** Aumente o radius para ver o movimento das partículas ***
	},
	fullScreen: {
		enable: false, // Isso é importante se você está definindo o tamanho do seu próprio contêiner
		zIndex: 0,
	},
	scale: 1,
};
