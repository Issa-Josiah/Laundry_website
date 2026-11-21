import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata = {
  title: "King's DryCleaners and Laundry | Kirigiti Center",
  description:
    "Laundry, dry-cleaning, carpets, duvets, curtains, ironing and fumigation. Pickup and delivery near Todas Restaurant, Kirigiti Center.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}