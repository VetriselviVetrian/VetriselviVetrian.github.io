import { Merriweather, Montserrat } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/react";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Dr. V. Vetriselvi",
  description: "Portfolio website of Dr. V. Vetriselvi, Professor, Department of Computer Science and Engineering, Anna University, Chennai, India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${montserrat.variable} antialiased`}
      >
        <PageTransition>
          {children}
          <Analytics />
        </PageTransition>
      </body>
    </html>
  );
}
