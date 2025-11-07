import ContactSection from "@/components/ContactSection";
import useTranslate from "./hooks/useTranslate";

export default function Home() {
	const { translate } = useTranslate();
	return (
		<div className="w-full min-h-screen flex justify-center bg-zinc-50 font-sans dark:bg-black pt-10">
			<div className="grid grid-cols-1 md:grid-cols-2 w-2/3 ">
				<div className="flex flex-col gap-2">
					<ContactSection type="email" value="victorlms.dev@gmail.com" />
					<ContactSection type="phone" value="+55 21 98019 1911" />
					<ContactSection type="linkedin" value="/victorlimams" />
				</div>
				<div>
					<h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
						{translate("profileTitle")}
					</h1>
					<p>TL;DR;</p>
				</div>
			</div>
		</div>
	);
}
