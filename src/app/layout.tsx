import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Shaurya Shah — Artificial Intelligence & Machine Learning",
  description:
    "Personal portfolio of Shaurya Shah. B.Tech Artificial Intelligence & Machine Learning student at Dwarkadas J. Sanghvi College of Engineering (DJSCE). Engineering intelligent computational systems, data analytics, and scalable full-stack applications.",
  keywords: [
    "Shaurya Shah",
    "Shaurya",
    "Portfolio",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Analytics",
    "DeepSeek-R1",
    "FinSight",
    "DJSCE",
    "FastAPI",
    "Next.js",
  ],
  authors: [{ name: "Shaurya Shah" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('shaurya-portfolio-theme');
                  var theme = (saved === 'light' || saved === 'color' || saved === 'dark') ? saved : 'dark';
                  var root = document.documentElement;
                  root.setAttribute('data-theme', theme);
                  root.classList.remove('theme-dark', 'theme-light', 'theme-color', 'dark', 'light');
                  if (theme === 'light') {
                    root.classList.add('light', 'theme-light');
                  } else if (theme === 'color') {
                    root.classList.add('dark', 'theme-color');
                  } else {
                    root.classList.add('dark', 'theme-dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-sans antialiased selection:bg-[var(--text-primary)] selection:text-[var(--text-inverse)] overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          <SmoothScrollProvider>
            <div className="grain-overlay" aria-hidden="true" />
            <CustomCursor />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
