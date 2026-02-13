/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';
import { Providers } from './providers';

const mountserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luz&Tuna - Tuna da Universidade Lusíada de Lisboa',
  description: 'Luz&Tuna - Tuna da Universidade Lusíada de Lisboa',
  icons: {
    icon: {
      rel: 'icon',
      type: 'image/jpg',
      url: 'lt_logo.jpg',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: 'white' }} className={mountserrat.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
