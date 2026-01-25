// app/(site)/layout.tsx
import type { Metadata } from "next";
import '../../app/globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import {Toaster} from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Navbar appears on all pages */}
          <Navbar />

          <main className="sm:pt-10"> 
            {children}
            <Toaster position="top-right" richColors/>
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}
