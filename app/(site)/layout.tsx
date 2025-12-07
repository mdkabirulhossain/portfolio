// app/(site)/layout.tsx
import type { Metadata } from "next";
import '../../app/globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";



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
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          {/* Navbar appears on all pages */}
          <Navbar />

          <main className="pt-20"> {/* Add margin so content does not hide behind navbar */}
            {children}
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}
