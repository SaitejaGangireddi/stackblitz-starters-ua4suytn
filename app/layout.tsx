import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Annapurna Seeds & Farms | A Farmer’s Trust',
  description:
    'Providing high-quality, disease-tolerant, and high-yield seeds.',
  verification: {
    google: '1z_dU96h0_w2OMxmBN7ZlhDjZe6nrdy_u9I2f9WdlZc',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}