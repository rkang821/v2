import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachel Kang – Security Engineer",
  description: "Portfolio and selected projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialTheme = cookies().get("theme")?.value ?? "light";
  return (
    <html
      lang="en"
      className={initialTheme}
      style={{ colorScheme: initialTheme }}
    >
      {/* ThemeProvider still swaps themes client-side */}
      <body className="antialiased">
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
