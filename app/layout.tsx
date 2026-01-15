import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: 'IQ Leading Center',
  description: 'Official site of IQ Leading Center',
}

export default function RootLayout({children}:{children: React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-6xl mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
