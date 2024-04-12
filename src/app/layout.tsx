// 이 순서로 적어주기
import "@mantine/core/styles.css";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
        <footer>
          <nav>
            <ul>
              <li>
                <a href="/">Meta</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </nav>
          <p>© 2024 Instagram from Meta</p>
        </footer>
      </body>
    </html>
  );
}
