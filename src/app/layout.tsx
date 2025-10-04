import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "600"]
})

export const metadata: Metadata = {
  title: "Hatsu Chat >.<",
  description: "Chat bot",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}  
      >
        {children}
      </body>
    </html>
  );
}
