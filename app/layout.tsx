import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Printing Press — Design & Print",
  description:
    "A modern portfolio concept for an independent design and print studio, with clear services, guide pricing and an easy enquiry journey.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
