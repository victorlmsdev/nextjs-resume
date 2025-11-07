import ContactSection from "@/components/ContactSection";
import useTranslate from "./hooks/useTranslate";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
	const { translate } = useTranslate();
	const profileStrings = translate("profile") as ProfileSection;
	const experienceStrings = translate("experience") as ExperienceSection;

	const renderExperienceItems = () => {
		return experienceStrings.items.map((item, index) => (
			<div key={index} className="mb-6">
				<h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
					{item.subtitle}
				</h3>
				<h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
					{item.role}
				</h4>
				<span className="text-sm italic text-zinc-700 dark:text-zinc-300">
					{item.date}
				</span>
				<div className="border-l-2 border-zinc-900 pl-4">
					<div className="mt-2">
						{item.description.map((desc, descIndex) => (
							<p
								key={descIndex}
								className="mb-2 whitespace-pre-wrap text-zinc-800 dark:text-zinc-200"
							>
								{desc}
							</p>
						))}
					</div>
					<div className="mt-2">
						<strong className="text-zinc-900 dark:text-zinc-100 mr-2">
							Stack:
						</strong>
						{item.stack.map((tech, techIndex) => (
							<span
								key={techIndex}
								className="inline-block bg-zinc-900 dark:bg-zinc-800 text-background dark:text-zinc-100 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
		));
	};

	return (
		<div className="w-full min-h-screen flex justify-center bg-zinc-50 font-sans dark:bg-black pt-10">
			<div className="grid grid-cols-1 md:grid-cols-2 w-2/3 gap-4 ">
				<div className="flex flex-col gap-2">
					<section id="contact-section">
						<ContactSection type="email" value="victorlms.dev@gmail.com" />
						<ContactSection type="phone" value="+55 21 98019 1911" />
						<ContactSection type="linkedin" value="/victorlimams" />
					</section>
					<section id="highlights">
						<h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
							Destaque
						</h2>
						<p className="text-justify whitespace-pre-wrap p-0 md:pr-8">
							Realização de um intercâmbio acadêmico para a Austrália na
							Greystone College estudando Gerência de Projetos (Certificate IV).
							Onde pude aprimorar o inglês, conhecer novas culturas e aprofundar
							meus conhecimentos na área de gerenciamento de projetos.
						</p>
						<br />
						<p>
							Também tive uma experiência profissional híbrida com equipe
							internacional 100% em inglês.
						</p>
					</section>
					<section id="projects-section">
						<h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
							Projetos
						</h2>
						<ProjectSection
							title="Screen Details"
							description="Navegador de filmes"
							links={[
								{
									url: "https://www.amazon.com.br/Victor-Lima-Mello-dos-Santos/dp/B0D9WZSL7Q/ref=sr_1_3?crid=1N114VEBV6XY9&dib=eyJ2IjoiMSJ9.mjIdgx61FlmbMz0UMR5wlqsEUUNJiiHG739mA1ZOeoBMvIE69nd_Hxgb08q-2bMsvorR4L_cYAOnQQxFHNLnFqIWOCnZt4ih_wnr7unHbKoSAk_GhaG2Hk7OwbldeaVVSnZfuwF3_o7oz5h5Nwy7c2tI6faeX5ZHvS4n9GZCl0A_zfttoNKPx-cSOVOYwyHEdqPk8bwdp5xUEPauhMO2bBBHYVcbntE7OlKY3ZEKv_b00gr7aJf3i9DJpysbOV42BeO407guza7ZeVc4XBFgLNQlK0W06yqHKGnZ_2T7TP0.1u3WkxayjgMrjc3l3EOy4ZVGaKCb90dfbX43VCptOxw",
									label: "amazon",
								},
							]}
						/>
						<ProjectSection
							title="Pefisa Empresas"
							description="Internet/Mobile Banking"
							links={[
								{
									url: "https://apps.apple.com/br/app/pefisa-empresas/id1573817046",
									label: "apple",
								},
								{
									url: "https://play.google.com/store/apps/details?id=com.apptoken_native&hl=en_US&gl=US",
									label: "android",
								},
							]}
						/>
						<ProjectSection
							title="Pefisa Pay"
							description="Mobile Banking"
							links={[
								{
									url: "https://apps.apple.com/br/app/pefisa-pay/id1639407102",
									label: "apple",
								},
								{
									url: "https://play.google.com/store/apps/details?id=com.pefisapay&hl=pt",
									label: "android",
								},
							]}
						/>
					</section>
				</div>
				<div className="text-justify gap-2 grid">
					<section id="profile">
						<h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
							{profileStrings.title}
						</h2>
						<p className="whitespace-pre-wrap">
							{profileStrings.description.join("\n\n")}
						</p>
					</section>
					<section id="experience-section">
						<h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
							{experienceStrings.title}
						</h2>
						{renderExperienceItems()}
					</section>
				</div>
			</div>
			<ScrollToTopButton />
		</div>
	);
}
