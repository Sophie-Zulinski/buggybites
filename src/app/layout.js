import './globals.scss';
import { AuthProvider } from '@/components/authprovider/Authprovider';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import { Merriweather } from 'next/font/google';

export const metadata = {
  title: 'BuggyBites',
  description: 'Finding a restaurant suitable for strollers',
};
const merriweather = Merriweather({ subsets: ['latin'], weight: '300' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.10.2/css/all.css"
        />
      </head>

      <body className={merriweather.className}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
