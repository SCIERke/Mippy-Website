import type { Metadata } from "next";

import "./globals.css";




export const metadata: Metadata = {
  title: "Mippy",
  description: "We're software freelancers, dedicated to fulfilling your requirements!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
