// app/layout.js

import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio showcasing my work.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
