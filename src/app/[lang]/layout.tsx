import type { Metadata } from "next";
import { dir } from "i18next";
import { languages } from "@/app/i18n/settings";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raka Mahardika",
  description: "Personal website of Raka Mahardika",
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} dir={dir(lang)} suppressHydrationWarning={true}>
      <body className={`${inter.className} ${jakarta.className}`}>
        {children}
      </body>
    </html>
  );
}
