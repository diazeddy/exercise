import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exercise"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <header className="bg-blue grow-0 pl-8">
          <Link href="/">
            <div className="h-[60px] flex items-center">
              <img src="https://storage.googleapis.com/fitbod-web-internal/logo.svg" />
            </div>
          </Link>
        </header>

        <section className="bg-gradient-to-b from-green from-0% to-sky to-125% grow overflow-auto">
          {children}
        </section>

        <footer className="bg-blue grow-0">
          <div className="h-[150px]" />
        </footer>
      </body>
    </html>
  );
}
