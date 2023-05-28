import { Nunito } from "next/font/google";

import "./globals.css";
import {
  ClientOnly,
  LoginModal,
  Navbar,
  RegisterModal,
  RentModal,
} from "@/components";
import ToasterProvider from "@/providers/ToasterProvider";
import getCurrentUser from "@/actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });
export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
