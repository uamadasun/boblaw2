import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-Montserrat",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "BOB Law",
  description:
    "Bob Law Firm - Experienced personal injury attorneys in Atlanta, Georgia. We offer free case evaluations and no fees unless we recover money for you. Get expert legal representation for your personal injury claim today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className={inter.className}><NavBar />
        {children}
        <div className="h-10 mb-2"></div>
        <Footer /></body>
    </html>
  );
}
