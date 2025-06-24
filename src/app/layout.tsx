// src/app/layout.tsx
import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/themeprovider";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Rachel Kang – Security Engineer",
  description: "Portfolio and selected projects",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const initialTheme = cookieStore.get("theme")?.value ?? "light";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="layout">
        <ThemeProvider attribute="class" defaultTheme={initialTheme}>
          <div className="app-container">
            {/* Left column: sticky header */}
            <div className="lg:flex h-full overflow-y-auto">
              <header className="header-wrapper">
                <Header />
              </header>
              <main id="content" className="content-wrapper pb-10">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
