import {
  Inter,
  Dancing_Script,
  Playfair_Display,
  Lato,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["400", "700"],
  display: "swap",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Glam by Nadege",
  description:
    "Discover the ultimate haircare experience at Glam by Nadege in Everett, Washington. Our expert stylists specialize in afro natural hair care, braids, weaves, and all the stunning hairstyles that celebrate the beauty of black women. Join us for a journey of empowerment, self-expression, and the highest level of professionalism. Book your appointment today and let us transform your hair into a work of art.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className={`${dancing_script.variable} ${lato.variable} ${playfair_display.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
