import "./globals.css";
import AppHeader from "@/components/AppHeader/AppHeader";
import { Roboto, Montserrat } from "next/font/google";
import styles from "./layout.module.css";
import TanStackProvider from "@/components/TanStackProvider";

export const metadata = {
  title: "My Site",
};

const RobotoFonts = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "800"],
});

const MontserratFonts = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RobotoFonts.variable} ${MontserratFonts.variable}`}>
        <TanStackProvider>
          <div className={styles.shell}>
            <AppHeader />
            <main className={styles.content}>{children}</main>
          </div>
        </TanStackProvider>
      </body>
    </html>
  );
}
