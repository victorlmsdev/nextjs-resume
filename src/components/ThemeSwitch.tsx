"use client";

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme();

	const handleThemeChange = (newChecked: boolean) => {
		setTheme(newChecked ? "dark" : "light");
	};

	return (
		<div className="absolute right-0 top-10 py-2 px-1 rounded-l-2xl bg-foreground z-20">
			<Switch
				checked={theme === "dark"}
				onCheckedChange={handleThemeChange}
				className="data-[state=checked]:bg-primary relative z-30
                           dark:data-[state=unchecked]:bg-input 
                           dark:data-[state=checked]:bg-primary-foreground pointer-events-auto"
				aria-label="Toggle dark mode"
			/>
		</div>
	);
};
export default ThemeSwitch;
