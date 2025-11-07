interface ProfileSection {
	title: string;
	description: string[];
}
interface ExperienceSection {
	title: string;
	items: {
		subtitle: string;
		role: string;
		date: string;
		description: string[];
		stack: string[];
	}[];
}

interface Dictionary {
	profile: ProfileSection;
	experience: ExperienceSection;
}
