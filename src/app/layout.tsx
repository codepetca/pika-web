import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pika Classroom",
  description: "Pika Classroom marketing and info site.",
};

const themeInitScript = `
(() => {
  const root = document.documentElement;
  let storedTheme = null;
  try {
    storedTheme = localStorage.getItem('theme');
  } catch {}
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : (prefersDark ? 'dark' : 'light');
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-page text-text-default antialiased">{children}</body>
    </html>
  );
}
