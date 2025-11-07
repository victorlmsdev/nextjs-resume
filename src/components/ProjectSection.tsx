"use client";

import { AmazonIcon, AndroidIcon, AppleIcon } from "@/assets";
import Image from "next/image";
import { FC, useMemo } from "react";
type Props = {
	title: string;
	links: {
		url: string;
		label: string;
	}[];
	description: string;
};

const ProjectSection: FC<Props> = ({ title, links, description }) => {
	const getIcon = (key: string) => {
		let uri = "";
		switch (key.toLowerCase()) {
			case "apple":
				uri = AppleIcon.src;
				break;
			case "android":
				uri = AndroidIcon.src;
				break;
			case "amazon":
				uri = AmazonIcon.src;
				break;
		}
		return (
			<Image
				src={uri}
				alt="mySvgImage"
				width={32}
				height={32}
				className="h-6 w-6 inline-block mr-2"
			/>
		);
	};

	return (
		<div className="flex flex-row items-center">
			<div>
				<h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
					{title}
				</h2>
				<p className="italic text-sm -mt-2">{description}</p>
			</div>
			<div className="ml-4 flex flex-row gap-2 ">
				{links.map((link, index) => (
					<a
						key={index}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-row hover:underline"
					>
						{getIcon(link.label)}
					</a>
				))}
			</div>
		</div>
	);
};

export default ProjectSection;
