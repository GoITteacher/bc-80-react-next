import AppHeader from "@/components/AppHeader/AppHeader";

import "./globals.css";
import styles from "./layout.module.css";
import TanStackProvider from "@/components/TanStackProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
