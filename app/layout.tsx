import type { Metadata } from 'next';
import { Inter, Noto_Sans_Bengali } from 'next/font/google';
import Layout from '@components/Layouts/lesson-game';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const notoSansBengali = Noto_Sans_Bengali({
  weight: ['400', '500', '600', '700'],
  subsets: ['bengali'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '',
  description: '',
  icons: ['/web-static/images/favicon-96x96.png'],
  openGraph: {
    title: '',
    description: '',
    images: [],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ ...inter.style, ...notoSansBengali.style }} lang="en">
      <head></head>
      <body>
        <div id="__loader" />

        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
