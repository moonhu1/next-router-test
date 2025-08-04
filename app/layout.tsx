import "./globals.css";
import Navbar from "./components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
