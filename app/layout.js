import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/bootstrap.css";
import "public/assets/css/color.css";
import "public/assets/css/color-2.css";
import "public/assets/css/style.css";
import "public/assets/css/icomoon-3.css";
import "public/assets/css/responsive.css";
import "public/assets/css/custom.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Barlow, Fira_Sans, Roboto } from "next/font/google";

const robotto = Roboto({
  weight: ["400","500","700"],
  subsets: ["latin"],
  variable: "--roboto",
  display: "swap",
})
const firaSans = Fira_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--fira-sans",
  display: "swap",
});
const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--barlow",
  display: "swap",
});

export const metadata = {
  title: "Ceegolabs Pvt Ltd",
  description: "Ceego Labs provides state-of-the-art manufacturing facilities for Food Supplements, Pharmaceutical and Feed Supplement Formulations.",
  
};

 

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${firaSans.variable} ${barlow.variable} ${robotto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
