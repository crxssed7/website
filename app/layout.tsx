import type { Metadata } from "next";
import { Poppins, Space_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "crxssed - software developer",
  description: "A software developer from the UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta name="theme-color" content="rgb(2,2,2)" />
            <meta name="" content="" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icon/16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icon/32x32.png" />
            <link rel="icon" type="image/png" sizes="180x180" href="/icon/180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/icon/192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/icon/512x512.png" />

            <meta property="og:description" content="crxssed - a software developer from the UK." />
            <meta name="keywords" content="manga" />
            <meta property="og:title" content="crxssed - software developer" />
            <meta property="og:image" content="/hero.png" />
            <meta property="og:image:alt" content="crxssed logo" />
            <meta name="twitter:image" content="/hero.png" />
            <meta property="twitter:image:alt" content="crxssed logo" />
            <meta name="twitter:card" content="summary_large_image" />

            <script src="https://hardcoverembed.gouthamve.dev/static/widget.js" async></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        </head>

      <body
        className={`${poppins.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
