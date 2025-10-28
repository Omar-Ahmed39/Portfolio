import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-dark-them dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
