
import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Labelize AI",
  description: "Data Labeling Marketpalce on Solana",
};
import AppWalletProvider from "@/components/app/AppWalletProvider";
export default function RootLayout({ children }) {

  
  return (
    <html className="dark" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[black]`}
      >
        <AppWalletProvider>

        {children}
        </AppWalletProvider>
      </body>
     
    </html>
  );
}
