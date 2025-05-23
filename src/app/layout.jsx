import "./globals.scss";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Moja prodavnica',
  description: 'Your one-stop shop for all your needs',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/Slika bara na pretrazivacu/ikonica-za-tab.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
