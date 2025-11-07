"use client";
import {
	EnvelopeIcon,
	PhoneArrowDownLeftIcon,
	PhoneIcon,
	QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { Linkedin, LinkedinIcon, LucideLinkedin } from "lucide-react";
import { FC, useMemo } from "react";

type Props = {
	type: "email" | "phone" | "address" | "linkedin" | "github";
	value: string;
};

const ContactSection: FC<Props> = ({ type, value }) => {
	const [Icon, url] = useMemo(() => {
		const style = "h-6 w-6 inline-block mr-2";
		let contactIcon = null;
		let url = "";
		switch (type) {
			case "email":
				contactIcon = <EnvelopeIcon className={style} />;
				url = `mailto:${value}`;
				break;
			case "phone":
				contactIcon = <PhoneIcon className={style} />;
				url = `https://wa.me/${value.split(" ").join("")}`;
				break;
			case "linkedin":
				contactIcon = <Linkedin strokeWidth={1} className={style} />;
				url = `https://www.linkedin.com/in${value}`;
				break;
			case "github":
				break;
		}

		return [contactIcon, url];
	}, [type, value]);

	return (
		<a href={url} target="blank" className="flex flex-row hover:underline">
			{Icon}
			<p>{value}</p>
		</a>
	);
};

export default ContactSection;
