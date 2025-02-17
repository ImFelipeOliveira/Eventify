import type { Metadata } from "next";
import "./globals.css";
import favicon from "./static/favicon.ico";
import { ThemeProvider } from "@/theme/theme-provider";
import ColorModeButton from "@/components/ui/color-mode";
export const metadata: Metadata = {
  title: "Eventify",
  description: "",
  icons: favicon.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ColorModeButton />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
