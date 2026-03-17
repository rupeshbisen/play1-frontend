import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Play1',
    template: '%s | Play1',
  },
};

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
