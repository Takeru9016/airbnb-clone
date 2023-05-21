import "./globals.css";
import { Nunito } from "next/font/google";

import { ClientOnly, Navbar } from "@/components";

const font = Nunito({ subsets: ["latin"] });
export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
