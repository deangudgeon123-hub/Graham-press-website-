import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Graham Press — Design & Print",
  description:
    "Local design and printing in Bognor Regis. Colour printing, copying, large format, stationery, binding, laminating and design help.",
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
