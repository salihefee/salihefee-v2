import { DM_Mono, DM_Sans, DM_Serif_Display } from "next/font/google";
import "../src/styles/index.css";
import "../src/App.css";
import "../src/components/Navbar/Navbar.css";
import "../src/components/Projects/Projects.css";
import "../src/components/Socials/Socials.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Salih Efe Ergür",
  description: "Salih Efe Ergür's personal website and project portfolio.",
  icons: {
    icon: "/s.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmMono.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
