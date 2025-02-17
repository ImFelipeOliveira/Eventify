import type { Metadata } from "next";
import "./globals.css";
import favicon from "./static/favicon.ico";
import { ThemeProvider } from "@/theme/theme-provider";
import ColorModeButton from "@/components/color-mode";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Eventify",
  description: "",
  icons: favicon.src,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const colorModeCookie = await cookies();
  const colorMode = colorModeCookie.get("chakra-ui-color-mode");

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider colorMode={colorMode}>
          <ColorModeButton />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
