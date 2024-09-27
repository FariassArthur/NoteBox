import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import ThemeClient from "./themeClient";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project NoteBox",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeClient>
        <body className={notoSans.className}>{children}</body>
      </ThemeClient>
    </html>
  );
}
