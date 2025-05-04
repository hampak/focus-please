import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Focus Please",
  description: "An application that helps users to track how much they focus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
