import { ProfileStrings } from "@/constants/strings";

type LangStrings = (typeof ProfileStrings)[keyof typeof ProfileStrings];

type TranslationKey = keyof LangStrings;

const useTranslate = () => {
	const lang = "ptBr" as keyof typeof ProfileStrings;

	const translate = (key: TranslationKey) => {
		return ProfileStrings[lang][key] || key;
	};

	return { translate };
};

export default useTranslate;
