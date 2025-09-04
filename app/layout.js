import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const logourl = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/m6LjqZnQXrClXx8x/image-1---copy---copy-A1aP0ERQxJsXnjny.png"


const inter = Inter({
  variable: "--font-inter"
});


export const metadata = {
  title: "Contact Form | VAM Enterprises",
  description: "VE Contact Form",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>

  );
}
