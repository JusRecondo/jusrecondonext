import type { Metadata } from 'next';
import '../styles/globals.scss';
import HydraBackground from '@/components/hydra-background/HydraBackground';
import Footer from '@/components/footer';
import Main from '@/components/main';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: "JR",
  description:
    "Jus Recondo: programadore, músique, a veces acuchilla guitarras.",
  authors: [{ name: "Jus Recondo" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
        <HydraBackground />
      </body>
    </html>
  );
}
