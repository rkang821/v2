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
      {/* 
        1. h-screen gives body a full viewport height 
        2. lg:flex h-full splits header + content at desktop 
      */}
      <body className="h-screen antialiased bg-navy">
        <ThemeProvider attribute="class" defaultTheme={initialTheme}>
          <div className="lg:flex h-full">
            {/* Left column: sticky header */}
            <Header />
            <main id="content" className="header-wrapper">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
