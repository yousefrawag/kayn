import "./globals.css"
// import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from  "@/layout/headre/Header"


export const metadata = {
  title: "كيان",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
      dir="rtl"
     
      >
<Header />
        {children}
      </body>
    </html>
  );
}
