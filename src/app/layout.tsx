// src/app/layout.tsx
import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/themeprovider";
import Header from "@/components/sections/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rachel Kang – Security Engineer",
  description: "Portfolio and selected projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const initialTheme = cookieStore.get("theme")?.value ?? "light";

  return (
    <html
      lang="en"
      className={inter.variable}
      style={{ colorScheme: initialTheme }}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme={initialTheme}>
          <div className="app-container lg:flex lg:justify-center lg:w-full lg:gap-4">
            <div className="layout flex flex-col lg:flex-row h-full overflow-y-auto px-4 lg:px-12">
              <header id="header" className="header-wrapper">
                <Header />
              </header>
              <main id="content" className="content-wrapper">
                <div className="max-w-2xl mx-auto">{children}</div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
