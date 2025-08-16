import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "iNSTAGRAN - LET MAKE FRIEND",
  description: "ye app kuch nahi karta hai waist of time hai dont use it",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body>
        {children}
      </body>
      <Footer />
    </html>
  );
}
