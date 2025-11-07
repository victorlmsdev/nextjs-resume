import { PtBR, EnUS } from "@/constants/strings";

type TranslationKey = keyof Dictionary;

const useTranslate = () => {
	const translate = (sectionKey: TranslationKey) => {
		const section = PtBR[sectionKey] || sectionKey;

		return section;
	};

	return { translate };
};

export default useTranslate;
