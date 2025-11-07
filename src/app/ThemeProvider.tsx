// Exemplo de como o ThemeProvider DEVE ser implementado no Next.js App Router
"use client";

import * as React from "react";
import {
	ThemeProvider as NextThemesProvider,
	ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
